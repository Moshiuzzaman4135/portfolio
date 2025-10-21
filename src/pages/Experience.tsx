import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'TigerIT Bangladesh Ltd.',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 - Present',
    achievements: [
      'Led and coordinated a 6-member cross-functional team delivering AI, NLP, and backend microservices',
      'Clustered and optimized 1.2M+ facial embeddings for national identity verification systems',
      'Architected scalable video intelligence backends integrating FRS, ANPR, and captioning modules',
      'Developed LLM-driven adaptive learning workflows for the Kindermate platform',
      'Deployed distributed microservices on Kubernetes with integrated monitoring and CI/CD',
    ],
  },
  {
    company: 'TigerIT Bangladesh Ltd.',
    role: 'Software Engineer',
    period: 'Feb 2021 - Aug 2024',
    achievements: [
      'Developed asynchronous pipelines for real-time ANPR and face recognition',
      'Built ML benchmarking APIs for multilingual evaluation workflows',
      'Implemented translation/speech integration for CommChat multilingual messaging',
      'Automated CI/CD workflows for reproducible deployment pipelines',
    ],
  },
  {
    company: 'Mindfork Tech Ltd.',
    role: 'Software Development Intern',
    period: 'Sep 2020 - Jan 2021',
    achievements: [
      'Improved textile e-commerce Android app using React Native',
      'Designed MySQL schemas and ASP.NET Core REST APIs',
      'Enhanced .NET Razor admin panel for workflow management',
    ],
  },
];

export const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-colors"
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
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{exp.period}</span>
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
