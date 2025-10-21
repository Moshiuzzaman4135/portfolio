import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  UserCircle2,
  Rocket,
  Layers,
  GraduationCap,
} from 'lucide-react';
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
    title: 'National AI Platforms at Tiger IT',
    description:
      'Delivered iVip (video intelligence), Smart Attendance (FRS), and ePass back-office services powering high-availability identity workflows for government programmes.',
  },
  {
    title: 'LLM Experiences for Education & Customer Care',
    description:
      'Built Kindermate lesson generation, auto-feedback, and Bengali-English copilots plus policy-aligned prompt libraries used across enterprise support desks.',
  },
  {
    title: 'Conference Paper: Enhancing Splunk for Machine Data Analytics',
    description:
      'Presented at the 2023 International Conference on Data Intelligence and Security (ICDIS). Proposed optimised ingestion, adaptive dashboards, and ML-ready schemas for petabyte-scale telemetry.',
    link: 'https://dl.acm.org/doi/10.1145/3723178.3723272',
  },
  {
    title: 'Academic Projects & Labs',
    description:
      'HealthyHome EMR suite (C#), ServicePoint job portal (.NET), and a real-time attendance tracker built with OpenCV and TensorFlow.',
  },
];

const summary = [
  'Senior Software Engineer with 5+ years of experience spanning AI, backend engineering, and MLOps.',
  'Lead developer for video intelligence, biometric deduplication, and multilingual communication platforms serving millions of citizens.',
  'Conference speaker and published author on data analytics pipelines with a focus on observability, data quality, and deployment governance.',
  'Comfortable steering the full product lifecycle—from discovery and architecture to launch, scaling, and knowledge transfer.',
];

export const Resume = () => {
  const [resumeAvailable, setResumeAvailable] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/static/resume.pdf', { method: 'HEAD', signal: controller.signal })
      .then((response) => {
        if (response.ok) {
          setResumeAvailable(true);
        }
      })
      .catch(() => {
        setResumeAvailable(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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
          {resumeAvailable ? (
            <a
              href="/static/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl transition-shadow"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-200 text-slate-600 font-semibold">
              <Download className="w-5 h-5" />
              Add <span className="font-mono">resume.pdf</span> to /public/static
            </div>
          )}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/80 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-10 shadow-xl shadow-slate-200/60 dark:shadow-none"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                {!avatarError ? (
                  <img
                    src="/static/profile.jpg"
                    alt="Portrait of S.M. Moshiuzzaman Shatil"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <UserCircle2 className="w-14 h-14 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">S.M. Moshiuzzaman Shatil</h2>
                <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mt-2">Senior Software Engineer</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">AI/ML Platforms • Backend Engineering • MLOps Leadership</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300">
              <div className="space-y-2">
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
              <div className="space-y-2">
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
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
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
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
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
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
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
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/60 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
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
