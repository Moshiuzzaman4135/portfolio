import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { articles } from '../data/articles';

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

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
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 mb-6">
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
              <Tag className="w-4 h-4 text-slate-400" />
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-code:text-cyan-600 dark:prose-code:text-cyan-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
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
