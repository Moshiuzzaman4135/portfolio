import type { LucideIcon } from 'lucide-react';
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

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
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
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'C#', 'Java', 'JavaScript'],
  },
  {
    icon: Brain,
    title: 'Frameworks & Libraries',
    skills: ['FastAPI', 'Flask', '.NET Core', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Kafka', 'Elasticsearch', 'MinIO/S3', 'AWS', 'Azure'],
  },
  {
    icon: Boxes,
    title: 'DevOps & MLOps',
    skills: ['Docker', 'Kubernetes', 'Celery', 'Jenkins', 'GitHub Actions', 'GitLab CI'],
  },
  {
    icon: Cloud,
    title: 'AI Engineering',
    skills: ['Object Detection', 'Face Embedding Extraction', 'Caption Generation', 'Machine Translation', 'LLM Prompting'],
  },
  {
    icon: Users,
    title: 'Leadership & Collaboration',
    skills: ['Architecture Reviews', 'Agile/Scrum', 'Team Mentoring', 'Code Review', 'Cross-functional Coordination'],
  },
  {
    icon: Lightbulb,
    title: 'Analytical Foundations',
    skills: ['Data Structures', 'Algorithms', 'Optimization', 'Quantum Computing Fundamentals'],
  },
  {
    icon: GitBranch,
    title: 'Tooling & Automation',
    skills: ['Git', 'CI/CD Pipelines', 'Monitoring & Observability', 'Model Evaluation Pipelines'],
  },
];
