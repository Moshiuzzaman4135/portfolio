import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            A journey through my career in software engineering and AI development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 dark:bg-slate-900/70 backdrop-blur rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-colors shadow-sm shadow-slate-200/60 dark:shadow-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h2>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * achIndex }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-cyan-500 rounded-full"></div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
