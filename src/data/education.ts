export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
}

export const education: EducationItem[] = [
  {
    institution: 'American International University - Bangladesh (AIUB)',
    degree: 'Master of Science in Computer Science',
    period: 'Sep 2021 – Mar 2023',
    location: 'Dhaka, Bangladesh',
    gpa: 'GPA: 3.90',
  },
  {
    institution: 'American International University - Bangladesh (AIUB)',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    period: 'Jan 2017 – Oct 2021',
    location: 'Dhaka, Bangladesh',
    gpa: 'GPA: 3.79',
  },
];
