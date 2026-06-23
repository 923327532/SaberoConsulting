import type { CareersData } from './types';

export const careersEn: CareersData = {
  hero: {
    title: 'Build your career with purpose',
    subtitle:
      'At SABERO we develop digital products, platforms and technology solutions with a human focus, technical excellence and a growth mindset.',
    cta: 'View opportunities',
    ctaSecondary: 'Learn about our culture',
    image: '/images/careers/hero-team.jpg',
  },
  whySabero: {
    title: 'Why SABERO',
    subtitle:
      'We believe talent grows when it finds real challenges, a solid team and the freedom to build.',
    tabs: [
      {
        id: 'impact',
        label: 'Impact',
        icon: 'Target',
        title: 'Work that matters',
        description:
          'You participate in real products and solutions for businesses in the Americas and Europe. Every line of code, every design decision has direct business impact.',
        image: '/images/careers/impact.jpg',
      },
      {
        id: 'development',
        label: 'Development',
        icon: 'TrendingUp',
        title: 'Continuous learning',
        description:
          'We take your growth seriously. You get progressive challenges, internal mentorship, training resources and exposure to modern technologies.',
        image: '/images/careers/learning.jpg',
      },
      {
        id: 'collaboration',
        label: 'Collaboration',
        icon: 'Users',
        title: 'Teams that add up',
        description:
          'We work in multidisciplinary, close-knit teams focused on quality. No silos, no hierarchies that hold you back. The best idea wins.',
        image: '/images/careers/challenges.jpg',
      },
      {
        id: 'progress',
        label: 'Progress',
        icon: 'Rocket',
        title: 'Career with horizon',
        description:
          'We design professional growth paths with real ownership. From your first months, you have space to propose, lead and evolve your role.',
        image: '/images/careers/mentorship.jpg',
      },
    ],
  },
  lifeAtSabero: {
    title: 'Life at SABERO',
    subtitle:
      'We work with autonomy, collaboration and a focus on quality. Every team has clear context, modern tools and freedom to decide how to build.',
    items: [
      {
        title: 'Real collaboration',
        description:
          'We work in integrated teams with product, design and engineering. No walls between disciplines.',
      },
      {
        title: 'Owners, not tasks',
        description:
          'Each person owns what they build. From day one you have context, responsibility and a voice.',
      },
      {
        title: 'Continuous improvement',
        description:
          'We question processes, refine our ways and celebrate what we learn. Stagnation is not an option.',
      },
      {
        title: 'Product focus',
        description:
          'We dont do tickets without context. We understand the business, the user and the impact of each delivery.',
      },
    ],
  },
  teams: {
    title: 'Our teams',
    subtitle:
      'Each area has its own personality, but we share a way of working: collaborative, demanding and product-oriented.',
    list: [
      {
        id: 'engineering',
        title: 'Engineering',
        description:
          'We design and build robust, scalable and maintainable systems. Backend, frontend, full stack, architecture, integrations and cloud.',
        focus: 'Node.js, React, AWS, Python, Go, distributed architecture',
        cta: 'View role',
      },
      {
        id: 'product',
        title: 'Product',
        description:
          'We connect business, technology and experience. Discovery, roadmap, analysis and product vision.',
        focus: 'Product strategy, OKRs, discovery, data, business',
        cta: 'View role',
      },
      {
        id: 'uxui',
        title: 'UX/UI',
        description:
          'We create clear, accessible and consistent experiences. Interface design, design systems, research and prototyping.',
        focus: 'Figma, design systems, research, prototyping, accessibility',
        cta: 'View role',
      },
      {
        id: 'qa',
        title: 'QA',
        description:
          'We guarantee quality with a preventive approach and automation. Functional testing, continuous integration and standards.',
        focus: 'Cypress, Playwright, Jest, manual and automated testing',
        cta: 'View role',
      },
      {
        id: 'devops',
        title: 'DevOps',
        description:
          'We automate, secure and optimize operations. CI/CD, observability, cloud, deployments and infrastructure as code.',
        focus: 'AWS, Docker, Kubernetes, Terraform, CI/CD, monitoring',
        cta: 'View role',
      },
      {
        id: 'business',
        title: 'Business & Growth',
        description:
          'We drive SABEROs presence, build relationships and open markets. Sales, partnerships, marketing and expansion.',
        focus: 'Consultative sales, alliances, B2B marketing, regional expansion',
        cta: 'View role',
      },
    ],
  },
  growth: {
    title: 'Growth and learning',
    subtitle:
      'We dont believe in linear careers. We believe in progressive challenges, continuous learning and development tailored to each person.',
    items: [
      {
        title: 'Continuous learning',
        description:
          'Access to resources, internal training and time to explore new technologies and approaches.',
      },
      {
        title: 'Real challenges',
        description:
          'You work on real business problems from your first month. No toy projects or long induction periods without context.',
      },
      {
        title: 'Growth by impact',
        description:
          'Your evolution depends on the impact you generate, not a job title. More impact means more responsibility and horizon.',
      },
      {
        title: 'Mentorship',
        description:
          'We assign mentors, provide continuous feedback and design personalized development plans.',
      },
    ],
  },
  inclusion: {
    title: 'Inclusion and culture',
    subtitle:
      'We believe the best teams are diverse, open and challenging. We build an environment where everyone can be themselves and give their best.',
    items: [
      {
        title: 'Respect for every voice',
        description:
          'All opinions count. We foster an environment where you can disagree, propose and question with respect.',
      },
      {
        title: 'Open collaboration',
        description:
          'No closed doors or privileged information. We share context, decisions and learnings with the whole team.',
      },
      {
        title: 'Healthy meritocracy',
        description:
          'We recognize talent and effort over titles. Opportunities are earned through work and attitude.',
      },
      {
        title: 'Professional and human environment',
        description:
          'We demand quality, but we care about people. Balance, trust and respect are non-negotiable.',
      },
    ],
  },
  process: {
    title: 'Selection process',
    subtitle:
      'We want to understand how you think, solve problems and collaborate. We dont do long processes or meaningless tests.',
    steps: [
      {
        step: '01',
        title: 'Application',
        description:
          'Send us your CV and tell us why you are interested in SABERO. We review your profile and respond within a week.',
      },
      {
        step: '02',
        title: 'Initial review',
        description:
          'We have a 30-minute conversation to get to know you, understand your interests and tell you how we work.',
      },
      {
        step: '03',
        title: 'Team conversation',
        description:
          'You talk with your potential lead and a team member. No trick questions, just genuine interest in how you think.',
      },
      {
        step: '04',
        title: 'Technical evaluation',
        description:
          'You solve a challenge close to what we would do together. No abstract algorithms, just real problems.',
      },
      {
        step: '05',
        title: 'Final interview',
        description:
          'Last conversation to align expectations, resolve doubts and define next steps.',
      },
      {
        step: '06',
        title: 'Offer',
        description:
          'If there is a match, we send you a clear proposal with role details, team, benefits and growth projection.',
      },
    ],
  },
  opportunities: {
    title: 'Open opportunities',
    subtitle:
      'We are building our team. If you want to be one of the first at SABERO, now is the time.',
    message:
      'We currently have no active vacancies, but we want to meet you. Send us your profile and we will contact you when the right opportunity arises.',
    cta: 'Send my profile',
  },
  futureTalent: {
    title: 'Future talent',
    subtitle:
      'If you are just starting out or want to stay on our radar, we want to hear from you.',
    items: [
      {
        title: 'Internships',
        description:
          'We are looking for students and recent graduates eager to learn in real digital product environments.',
      },
      {
        title: 'Junior talent',
        description:
          'If you have less than 2 years of experience but show attitude, curiosity and solid technical foundation, we want to meet you.',
      },
      {
        title: 'Future collaborations',
        description:
          'Even if we dont have an open role today, your profile may fit future projects. Leave us your details.',
      },
    ],
    cta: 'Register my interest',
  },
};
