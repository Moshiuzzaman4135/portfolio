import { motion } from 'framer-motion';
import {
  Brain,
  Code,
  Database,
  Cloud,
  Boxes,
  Sparkles,
  GitBranch,
  Users,
  Lightbulb,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Sparkles,
    title: 'Core Areas',
    skills: [
      'Large Language Models',
      'Computer Vision',
      'Natural Language Processing',
      'Real-Time ML',
      'Reinforcement Learning',
      'System Design',
    ],
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'C++', 'C#', 'Java', 'JavaScript'],
  },
  {
    icon: Brain,
    title: 'Frameworks',
    skills: [
      'FastAPI',
      'Flask',
      '.NET Core',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
    ],
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Kafka',
      'Elasticsearch',
      'MinIO/S3',
      'AWS',
      'Azure',
    ],
  },
  {
    icon: Boxes,
    title: 'DevOps & MLOps',
    skills: [
      'Docker',
      'Kubernetes',
      'Celery',
      'Jenkins',
      'GitHub Actions',
      'GitLab CI',
    ],
  },
  {
    icon: Cloud,
    title: 'AI Engineering',
    skills: [
      'Object Detection',
      'Face Embedding Extraction',
      'Caption Generation',
      'Machine Translation',
      'LLM Prompting',
    ],
  },
  {
    icon: Users,
    title: 'Leadership & Collaboration',
    skills: [
      'Architecture Reviews',
      'Agile/Scrum',
      'Team Mentoring',
      'Code Review',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Analytical Foundations',
    skills: [
      'Data Structures',
      'Algorithms',
      'Optimization',
      'Quantum Computing',
    ],
  },
];

export const Skills = () => {
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
            Technical Skills
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of technologies, frameworks, and methodologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
