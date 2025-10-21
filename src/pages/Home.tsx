import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const specialties = [
  'Python',
  'FastAPI',
  'Docker',
  'Redis',
  'Kubernetes',
  'Computer Vision',
  'Large Language Models',
  'PyTorch',
  'PostgreSQL',
  'AWS',
];

export const Home = () => {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white"
            >
              SMS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white"
            >
              S.M. Moshiuzzaman Shatil
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto"
            >
              Senior Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Building Scalable AI, Backend & MLOps Systems
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-8 flex items-center justify-center"
            >
              <span className="text-cyan-400 font-mono text-lg">
                {specialties[currentSpecialty]}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center space-x-6 pt-4"
            >
              <a
                href="https://github.com/Moshiuzzaman4135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/moshiuzzaman-shatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:shatil4135@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              About Me
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a Senior Software Engineer with 5+ years of experience in backend development,
                artificial intelligence, and distributed systems. My expertise lies in designing and
                deploying production-grade ML pipelines, cloud services, and scalable microservices
                architectures.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                I'm passionate about large-scale video analytics, natural language processing, and
                real-time systems. I thrive on solving complex technical challenges and leading
                cross-functional teams to deliver innovative AI-driven solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Education & Career Timeline
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Sep 2024 - Present
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Senior Software Engineer
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">TigerIT Bangladesh Ltd.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Feb 2021 - Aug 2024
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Software Engineer
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">TigerIT Bangladesh Ltd.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Sep 2020 - Jan 2021
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Software Development Intern
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">Mindfork Tech Ltd.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gradient-to-b from-blue-600 to-slate-400 rounded-full"></div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      2017 - 2021
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    B.Sc. in Computer Science
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    American International University-Bangladesh (AIUB)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
