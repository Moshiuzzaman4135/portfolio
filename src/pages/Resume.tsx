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

  // 👇 Build absolute URLs that work under any base path (local or /portfolio/)
  const resumeURL = `${import.meta.env.BASE_URL}static/resume.pdf`;
  const profileURL = `${import.meta.env.BASE_URL}static/profile.jpg`;

  useEffect(() => {
    const controller = new AbortController();

    fetch(resumeURL, { method: 'HEAD', signal: controller.signal })
      .then((response) => {
        if (response.ok) setResumeAvailable(true);
      })
      .catch(() => setResumeAvailable(false));

    return () => controller.abort();
  }, [resumeURL]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
            A consolidated view of professional experience, projects, and expertise.
          </p>

          {resumeAvailable ? (
            <a
              href={resumeURL}
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

        {/* Profile Card */}
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
                    src={profileURL}
                    alt="Portrait of S.M. Moshiuzzaman Shatil"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <UserCircle2 className="w-14 h-14 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  S.M. Moshiuzzaman Shatil
                </h2>
                <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mt-2">
                  Senior Software Engineer
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  AI/ML Platforms • Backend Engineering • MLOps Leadership
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Dhaka, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a
                    href="mailto:shatil4135@gmail.com"
                    className="hover:underline"
                  >
                    shatil4135@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> +880-1727546726
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
              <p
                key={paragraph}
                className="text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Remaining sections unchanged (experience, projects, skills, education) */}
        {/* ... */}
      </div>
    </div>
  );
};
