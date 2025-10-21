import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { mediaItems, mediaCategories, type MediaItem } from '../data/media';

export const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState(mediaCategories[0] ?? 'All');
  const [lightboxImage, setLightboxImage] = useState<MediaItem | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Media Gallery
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            A showcase of projects, events, and memorable moments
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {mediaCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden bg-white/80 dark:bg-slate-900/70 aspect-square border border-slate-200 dark:border-slate-700 shadow-sm shadow-slate-200/60 dark:shadow-none"
              onClick={() => setLightboxImage(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    {item.type === 'image' ? (
                      <ImageIcon className="w-5 h-5" />
                    ) : (
                      <VideoIcon className="w-5 h-5" />
                    )}
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400">
              No media found in this category
            </p>
          </div>
        )}

        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 p-4"
              onClick={() => setLightboxImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setLightboxImage(null)}
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lightboxImage.title}
                  </h3>
                  <span className="text-sm text-slate-300">{lightboxImage.category}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
