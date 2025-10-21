import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Resume
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Download or view my complete professional resume
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-center mb-8">
              <FileText className="w-16 h-16 mx-auto text-cyan-500 mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                S.M. Moshiuzzaman Shatil
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Senior Software Engineer
              </p>
              <div className="flex justify-center gap-4 mt-4 text-sm text-slate-600 dark:text-slate-400">
                <span>shatil4135@gmail.com</span>
                <span>•</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Professional Summary
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Senior Software Engineer with 5+ years of experience specializing in AI, backend
                development, and MLOps. Proven track record of architecting and deploying scalable
                machine learning systems, leading cross-functional teams, and delivering
                production-grade solutions for video intelligence, NLP, and distributed computing
                platforms.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Work Experience
              </h3>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Senior Software Engineer
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      TigerIT Bangladesh Ltd.
                    </p>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">Sep 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    Led a 6-member cross-functional team delivering AI, NLP, and backend
                    microservices
                  </li>
                  <li>
                    Optimized 1.2M+ facial embeddings for national identity verification systems
                  </li>
                  <li>
                    Architected video intelligence backends integrating FRS, ANPR, and captioning
                  </li>
                  <li>Developed LLM-driven adaptive learning workflows for Kindermate platform</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Software Engineer
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      TigerIT Bangladesh Ltd.
                    </p>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">Feb 2021 - Aug 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Developed asynchronous pipelines for real-time ANPR and face recognition</li>
                  <li>Built ML benchmarking APIs for multilingual evaluation workflows</li>
                  <li>Implemented translation/speech integration for CommChat</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Software Development Intern
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      Mindfork Tech Ltd.
                    </p>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">Sep 2020 - Jan 2021</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Improved textile e-commerce Android app using React Native</li>
                  <li>Designed MySQL schemas and ASP.NET Core REST APIs</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Education
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    B.Sc. in Computer Science
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    American International University-Bangladesh (AIUB)
                  </p>
                </div>
                <span className="text-slate-600 dark:text-slate-400">2017 - 2021</span>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Languages & Frameworks
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    Python, C++, C#, Java, JavaScript, FastAPI, Flask, .NET Core, PyTorch,
                    TensorFlow
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                    Infrastructure & DevOps
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    Docker, Kubernetes, PostgreSQL, Redis, AWS, Azure, CI/CD
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
