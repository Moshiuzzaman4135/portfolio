import type { HTMLAttributes, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { articles } from '../data/articles';
import { useTheme } from '../contexts/ThemeContext';

type MarkdownCodeProps = {
  inline?: boolean;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);
  const { isDark } = useTheme();

  const CodeBlock = ({ inline, className, children, ...props }: MarkdownCodeProps) => {
    const [copied, setCopied] = useState(false);
    const language = useMemo(() => {
      if (!className) return 'text';
      const match = className.match(/language-(\w+)/);
      return match ? match[1] : 'text';
    }, [className]);

    const code = useMemo(() => String(children).replace(/\n$/, ''), [children]);

    const handleCopy = () => {
      if (typeof navigator === 'undefined' || !navigator.clipboard) return;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          setCopied(false);
        });
    };

    if (inline) {
      return (
        <code
          className={`whitespace-nowrap rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100 ${className ?? ''}`.trim()}
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <div
        className={`group relative my-8 overflow-hidden rounded-2xl border shadow-lg transition dark:shadow-none ${
          isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-900/5 px-4 py-2 dark:border-slate-800 dark:bg-slate-950/60">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre
          className={`max-h-[480px] overflow-auto px-4 py-5 text-sm leading-relaxed font-mono ${
            isDark
              ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100'
              : 'bg-gradient-to-br from-slate-900/95 via-slate-800 to-slate-900 text-slate-100'
          }`}
        >
          <code className={`block whitespace-pre text-left font-mono text-sm ${className ?? ''}`} {...props}>
            {code}
          </code>
        </pre>
      </div>
    );
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-3xl border border-slate-200 dark:border-slate-800 py-10 px-6 sm:px-10 shadow-xl shadow-slate-200/60 dark:shadow-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap mb-8">
              <Tag className="w-4 h-4 text-slate-400 dark:text-slate-300" />
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 prose-headings:text-slate-900 dark:prose-headings:text-slate-50 prose-p:text-inherit prose-a:text-cyan-600 dark:prose-a:text-cyan-400">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                pre: ({ children }) => <>{children}</>,
                code: CodeBlock,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
};
