export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Tiger IT Bangladesh Limited',
    role: 'Senior Software Engineer',
    period: 'Sep 2024 – Present',
    location: 'Dhaka, Bangladesh',
    achievements: [
      'Clustered and optimized over 1.2M facial embeddings for real-time identity search across HRM, Election Commission, NID, and Passport systems—unlocking sub-second verification throughput.',
      'Led and coordinated a 6-member cross-functional team delivering AI, NLP, and backend microservices for multiple national and enterprise deployments.',
      'Architected and deployed cloud-native microservices on Docker & Kubernetes, integrating speech and NLP modules with robust monitoring and CI/CD automation.',
      'Spearheaded backend architecture for the iVip Video Intelligence Platform combining FRS, ANPR, and video captioning analytics with Redis & Celery orchestration.',
      'Built and integrated LLM-driven content generation workflows for Kindermate, enabling adaptive lesson planning and contextual tutoring experiences.',
    ],
  },
  {
    company: 'Tiger IT Bangladesh Limited',
    role: 'Software Engineer',
    period: 'Feb 2021 – Aug 2024',
    location: 'Dhaka, Bangladesh',
    achievements: [
      'Built asynchronous pipelines for face recognition and ANPR using Celery and Redis to ensure scalable inference and intelligent load balancing.',
      'Designed REST APIs and automated benchmarking tools for multilingual ML models powering continuous evaluation loops in production.',
      'Integrated performance monitoring across FRS, ANPR, and translation modules to track accuracy drift and operational efficiency.',
      'Contributed to CommChat by developing translation and speech pipelines for multilingual communication alongside CI/CD automation.',
    ],
  },
  {
    company: 'Mindfork Tech Ltd.',
    role: 'Software Development Intern',
    period: 'Sep 2020 – Jan 2021',
    location: 'Dhaka, Bangladesh',
    achievements: [
      'Enhanced a textile e-commerce Android application using React Native with streamlined backend integrations.',
      'Designed MySQL schemas and ASP.NET Core REST endpoints for product and order management, improving data reliability.',
      'Refined a .NET Razor-based admin portal to optimize workflow execution for non-technical operators.',
    ],
  },
];
