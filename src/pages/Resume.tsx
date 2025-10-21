import { motion } from 'framer-motion';
import { Download, FileText, MapPin, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import { skillCategories } from '../data/skills';

type ProjectHighlight = {
  title: string;
  description: string;
  link?: string;
};

const projectHighlights: ProjectHighlight[] = [
  {
    title: 'Industry Projects at Tiger IT',
    description:
      'Contributed to iVip (Video Intelligence Platform), CommChat (multilingual communication), Attendance System (FRS), and Kindermate (LLM-powered learning) with a focus on backend scalability and AI integration.',
  },
  {
    title: 'Research: Enhancing Splunk for Machine Data Analytics',
    description:
      'Published at ACM—proposed database optimisation, rule-based analysis, and visualisation enhancements for large-scale machine data analytics.',
    link: 'https://dl.acm.org/doi/10.1145/3723178.3723272',
  },
  {
    title: 'University Projects',
    description:
      'HealthyHome (C# medical record manager) and ServicePoint (.NET service/job portal) developed as capstone initiatives.',
  },
];

const summary = [
  'Senior Software Engineer with 5+ years of experience spanning AI, backend engineering, and MLOps.',
  'Proven track record leading cross-functional teams to architect and deploy production-grade ML systems, video intelligence platforms, and LLM experiences.',
  'Comfortable working across the full product lifecycle—from ideation and stakeholder alignment to deployment, monitoring, and continuous optimisation.',
];

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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">Resume</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            A consolidated view of professional experience, projects, and expertise.
          </p>
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-slate-300 to-slate-400 text-slate-700 font-semibold cursor-not-allowed"
            aria-disabled
            title="Downloadable resume will be added soon"
          >
            <Download className="w-5 h-5" />
            Download coming soon
          </button>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">S.M. Moshiuzzaman Shatil</h2>
              <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mt-2">Senior Software Engineer</p>
              <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Dhaka, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:shatil4135@gmail.com" className="hover:underline">
                    shatil4135@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +880-1727546726
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-slate-600 dark:text-slate-300">
              <a
                href="https://github.com/Moshiuzzaman4135"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
                github.com/Moshiuzzaman4135
              </a>
              <a
                href="https://www.linkedin.com/in/moshiuzzaman-shatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                linkedin.com/in/moshiuzzaman-shatil
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {summary.map((paragraph) => (
              <p key={paragraph} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-cyan-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">{experience.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{experience.location}</p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{experience.period}</span>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-cyan-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Projects & Research</h2>
          </div>

          <div className="space-y-6">
            {projectHighlights.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-semibold hover:underline"
                    >
                      View publication
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-cyan-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-cyan-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((entry) => (
              <div
                key={`${entry.institution}-${entry.degree}`}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{entry.degree}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">{entry.institution}</p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{entry.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span>{entry.location}</span>
                  {entry.gpa && <span>{entry.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
