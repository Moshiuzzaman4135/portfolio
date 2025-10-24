import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Target,
  Gauge,
  ShieldCheck,
  Rocket,
  Layers,
  Image as ImageIcon,
  FileText,
} from 'lucide-react';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import { articles } from '../data/articles';
import { mediaItems } from '../data/media';

const specialties = [
  'Python & FastAPI Architect',
  'Distributed ML Systems',
  'Large Language Model Ops',
  'Computer Vision Pipelines',
  'Kubernetes & Cloud Native',
  'Real-time Video Analytics',
  'LLM Prompt Engineering',
  'Streaming Data Processing',
  'Scalable Microservices',
  'Tech Leadership & Mentoring',
];

const stats = [
  {
    label: 'Years of Experience',
    value: '5+',
    detail: 'AI, MLOps & distributed backend delivery',
  },
  {
    label: 'Systems Shipped',
    value: '10+',
    detail: 'Enterprise & national-scale production launches',
  },
  {
    label: 'Teams Led',
    value: '6',
    detail: 'Cross-functional engineers, ML scientists & designers',
  },
];

const highlightCards = [
  {
    icon: Target,
    title: 'AI Strategy & Roadmaps',
    description:
      'Translate ambitious business goals into executable AI programmes with measurable milestones and observability baked in.',
  },
  {
    icon: Gauge,
    title: 'Operational Excellence',
    description:
      'Design resilient pipelines, automated evaluation suites, and feedback loops that keep ML products reliable after launch.',
  },
  {
    icon: ShieldCheck,
    title: 'Velocity with Safety',
    description:
      'Enable rapid iteration through CI/CD, infrastructure as code, and strong collaboration rituals across product teams.',
  },
  {
    icon: Layers,
    title: 'Full-Stack ML Delivery',
    description:
      'Own everything from research to deployment—model experimentation, APIs, data platforms, and customer-facing insights.',
  },
];

export const Home = () => {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);
  const [avatarError, setAvatarError] = useState(false);
  const profileURL = `${import.meta.env.BASE_URL}static/profile.jpg`;
  const contactEmail = 'shatil4135@gmail.com';
  const [emailCopyStatus, setEmailCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (emailCopyStatus === 'idle') {
      return;
    }

    const timeout = setTimeout(() => setEmailCopyStatus('idle'), 2500);
    return () => clearTimeout(timeout);
  }, [emailCopyStatus]);

  const featuredExperiences = useMemo(() => experiences.slice(0, 2), []);
  const featuredSkills = useMemo(() => skillCategories.slice(0, 4), []);
  const featuredProjects = useMemo(() => projects.slice(0, 3), []);
  const featuredArticles = useMemo(() => articles.slice(0, 2), []);
  const featuredMedia = useMemo(() => mediaItems.slice(0, 3), []);

  const handleCopyEmail = async () => {
    try {
      if (
        typeof navigator !== 'undefined' &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === 'function'
      ) {
        await navigator.clipboard.writeText(contactEmail);
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.value = contactEmail;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      } else {
        throw new Error('Clipboard not available');
      }

      setEmailCopyStatus('copied');
    } catch (error) {
      console.error('Unable to copy email address', error);
      setEmailCopyStatus('failed');
    }
  };

  const timeline = useMemo(
    () => [
      ...experiences.map((item) => ({
        type: 'experience' as const,
        title: item.role,
        subtitle: item.company,
        period: item.period,
        location: item.location,
      })),
      ...education.map((item) => ({
        type: 'education' as const,
        title: item.degree,
        subtitle: item.institution,
        period: item.period,
        location: item.location,
        gpa: item.gpa,
      })),
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-slate-100 via-white to-slate-200 
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDAsMjA2LDIxNywwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-[45rem] h-[45rem] max-w-none bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/5 right-1/6 w-[45rem] h-[45rem] max-w-none bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-full shadow-xl shadow-cyan-500/20 border-4 border-white/80 dark:border-slate-800 overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
            >
              {!avatarError ? (
                <img
                  src={profileURL}
                  alt="Portrait of S.M. Moshiuzzaman Shatil"
                  className="w-full h-full object-cover object-center"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <span className="text-4xl font-bold text-white">SMS</span>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white"
            >
              S.M. Moshiuzzaman Shatil
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-200 max-w-3xl mx-auto"
            >
              Senior Software Engineer crafting resilient AI platforms, backend systems, and MLOps workflows for national-scale impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-full text-cyan-600 dark:text-cyan-300 font-mono text-sm sm:text-base"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {specialties[currentSpecialty]}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <a
                href="https://github.com/Moshiuzzaman4135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/moshiuzzaman-shatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:shatil4135@gmail.com"
                className="text-slate-500 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col items-center gap-3 pt-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
              >
                Let's collaborate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" /> Copy email address
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Or drop a message at{' '}
                <span className="font-mono text-slate-700 dark:text-slate-200">{contactEmail}</span>
              </p>
              {emailCopyStatus !== 'idle' && (
                <span className="text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
                  {emailCopyStatus === 'copied' && 'Email copied! Paste it wherever you need.'}
                  {emailCopyStatus === 'failed' && "Copy didn't work—long press or right click to copy instead."}
                </span>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
          >
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </motion.div>
        </div>
      </section>

      <section className="bg-white/80 dark:bg-slate-900 py-16 sm:py-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/60 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/80 dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                <Target className="w-4 h-4" />
                About
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Guiding AI initiatives from whiteboard vision to production impact
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialise in orchestrating large-scale AI, computer vision, and NLP programmes that demand reliability, low latency, and rigorous observability. From Tiger IT’s national identity systems to LLM-powered education platforms, I partner with stakeholders end-to-end—shaping architecture, building teams, and shipping resilient products.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Alongside delivery, I mentor engineers, champion clean code practices, and create the guardrails that keep experimentation safe for production workloads.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Explore experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors"
                >
                  View projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlightCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70 p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white/80 dark:bg-slate-900 py-16 sm:py-24 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                <Briefcase className="w-4 h-4" />
                Experience
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Recent leadership & delivery wins</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
                Highlights from shipping computer vision, NLP, and LLM systems across Tiger IT and strategic partners.
              </p>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              View full experience
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredExperiences.map((experience) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/60 p-8 shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{experience.company}</p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{experience.role}</h3>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{experience.period}</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {experience.achievements.slice(0, 3).map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/80 dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                <Layers className="w-4 h-4" />
                Skills
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Breadth across the stack, depth where it counts</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-3xl">
                From infrastructure to model evaluation, these are the capabilities I draw on daily to keep AI products reliable and continuously improving.
              </p>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Explore all skills
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70 p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {category.skills.slice(0, 5).map((skill) => (
                      <li key={skill} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white/80 dark:bg-slate-900 py-16 sm:py-24 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                <Rocket className="w-4 h-4" />
                Projects
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Turning research into production value</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
                Flagship programmes where I owned architecture, execution, and operational excellence.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              See more projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/60 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/80 dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                <Rocket className="w-4 h-4" />
                Articles
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Ideas from the field</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
                Practitioners notes on scaling ML, running LLM workloads, and designing resilient data platforms.
              </p>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Browse all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/70 p-6 shadow-sm shadow-slate-200/60 dark:shadow-none"
              >
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{article.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{article.description}</p>
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                >
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                <ImageIcon className="w-4 h-4" />
                Media
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Snapshots from the journey</h2>
              <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl">
                Glimpses into workshops, architecture sessions, and product showcases.
              </p>
            </div>
            <Link
              to="/media"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Open media gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMedia.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
              >
                <img src={item.url} alt={item.title} className="h-64 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wide text-white/70">{item.category}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 dark:bg-slate-950 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              <FileText className="w-4 h-4" />
              Resume & Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to partner on your next AI, ML, or platform initiative?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              I’m available for senior engineering leadership, architecture engagements, and cross-functional delivery of intelligent products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors"
              >
                View resume
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
              <GraduationCap className="w-4 h-4" />
              Timeline
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Career & education milestones</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={`${item.title}-${item.period}`} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        item.type === 'experience' ? 'bg-cyan-500' : 'bg-blue-500'
                      }`}
                    ></span>
                    {index !== timeline.length - 1 && (
                      <span className="flex-1 w-px bg-slate-200 dark:bg-slate-700 mt-2"></span>
                    )}
                  </div>
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-800 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.period}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{item.subtitle}</p>
                    {item.gpa && <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{item.gpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
