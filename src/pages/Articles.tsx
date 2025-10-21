import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Tag, Calendar } from 'lucide-react';
import { articles } from '../data/articles';

export const Articles = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Articles & Insights
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technical writings on AI, backend development, and distributed systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all hover:shadow-xl"
            >
              <Link to={`/articles/${article.id}`} className="block">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(article.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {article.description}
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-slate-400" />
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400">
              No articles published yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
