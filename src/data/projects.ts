import type { LucideIcon } from 'lucide-react';
import { Video, MessageSquare, GraduationCap, Users, Database, ShieldCheck, Workflow } from 'lucide-react';

export interface ProjectItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  link?: string;
}

export const projects: ProjectItem[] = [
  {
    icon: Video,
    title: 'iVip (Video Intelligence Platform)',
    description:
      'Distributed video analytics platform integrating Face Recognition System (FRS), Automatic Number Plate Recognition (ANPR), and scene understanding for national-scale surveillance and security.',
    tech: ['Python', 'FastAPI', 'Redis', 'Kubernetes', 'PostgreSQL', 'PyTorch', 'Docker', 'Celery'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'CommChat',
    description:
      'Real-time multilingual messaging platform powered by translation and speech pipelines, enabling seamless collaboration across language barriers with low-latency delivery.',
    tech: ['FastAPI', 'WebSocket', 'Redis', 'PostgreSQL', 'Docker', 'NLP', 'Speech API'],
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'Kindermate',
    description:
      'LLM-powered education assistant that generates adaptive lesson plans, contextual tutoring flows, and image-assisted storytelling for engaging learning experiences.',
    tech: ['Python', 'LLMs', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Users,
    title: 'Attendance System (FRS)',
    description:
      'Facial recognition-based attendance solution featuring distributed inference, real-time analytics, and actionable workforce insights.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'Redis', 'Computer Vision'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Database,
    title: 'Splunk Analytics Accelerator',
    description:
      'Researched and implemented ingestion optimisations, anomaly detection rules, and adaptive dashboards for petabyte-scale machine data powering SOC and NOC use cases.',
    tech: ['Splunk', 'Python', 'Kafka', 'Grafana', 'Elasticsearch'],
    gradient: 'from-amber-500 to-orange-600',
    link: 'https://dl.acm.org/doi/10.1145/3723178.3723272',
  },
  {
    icon: ShieldCheck,
    title: 'ePass Biometric Platform',
    description:
      'Microservices suite for passport issuance with biometric deduplication, queue management, and document verification integrated with national registries.',
    tech: ['FastAPI', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Docker', 'Keycloak'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Workflow,
    title: 'LLM Ops Toolkit',
    description:
      'Internal developer platform featuring guardrailed prompt templates, evaluation harnesses, and monitoring dashboards for production-ready generative AI experiences.',
    tech: ['LangChain', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Prefect', 'TypeScript'],
    gradient: 'from-sky-500 to-indigo-600',
  },
];
