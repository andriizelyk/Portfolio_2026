export interface Company {
  name: string;
  /** Link to the company's official site. */
  url?: string;
  /** Path to a logo image served from /public. Falls back to the name when unset. */
  logoUrl?: string;
}

/**
 * Single source of truth for every company referenced on the page.
 * Sections look these up by name so a logo or URL is only ever defined once.
 */
export const companies = {
  Amido: {
    name: 'Amido',
    url: 'https://www.amido.se/',
    logoUrl: '/ao_cpny.png',
  },
  'Argus Media': {
    name: 'Argus Media',
    url: 'https://www.argusmedia.com/',
    logoUrl: '/am_cpny.png',
  },
  CarMax: {
    name: 'CarMax',
    url: 'https://www.carmax.com/',
    logoUrl: '/cm_cpny.png',
  },
  Namecheap: {
    name: 'Namecheap',
    url: 'https://www.namecheap.com/',
    logoUrl: '/nc_cpny.png',
  },
  DataArt: {
    name: 'DataArt',
    url: 'https://www.dataart.com/',
    logoUrl: '/da_cpny.png',
  },
  SoftServe: {
    name: 'SoftServe',
    url: 'https://www.softserveinc.com/',
    logoUrl: '/ss_cpny.png',
  },
  LeadsMarket: {
    name: 'LeadsMarket',
    url: 'https://www.leadsmarket.com/',
    logoUrl: '/lm_cpny.png',
  },
} satisfies Record<string, Company>;

export type CompanyName = keyof typeof companies;

function company(name: CompanyName): Company {
  return companies[name];
}

/** Profile links, defined once so the navbar and footer can never drift apart. */
export const socialLinks = {
  github: 'https://github.com/andriizelyk',
  linkedin: 'https://www.linkedin.com/in/andrii-zelyk/',
  /** Resume PDF served from /public. */
  resume: '/AndriiZelykResume.pdf',
  /** Google Form that collects contact attempts — the Contact section's CTA. */
  contactForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSecQBVfOpRIoq3Xqa0D0ArqW2035PLGltekBeNDv9ezoIcLsg/viewform',
};

export const hero = {
  greeting: "HELLO, I'M",
  firstName: 'Andrii',
  lastName: 'Zelyk',
  title: 'Senior Software Engineer',
  tagline:
    'I build scalable software systems and modern web applications that solve real business problems — cutting infrastructure costs and modernizing APIs to be consumed as MCP servers for a smoother AI experience in everyday business.',
  badges: ['.NET', 'React', 'AWS', 'Azure'],
  location: 'Virginia, USA',
  availability: 'Available for new opportunities',
};

/**
 * `details` is a list of paragraphs — the stat dialog renders the first one as a
 * lead and the rest as indented follow-ups, so keep each entry a whole thought.
 */
export const stats = [
  {
    icon: 'work',
    value: '12+',
    label: 'Years Experience',
    description: 'Building enterprise software since 2013',
    details: [
      'My commercial career started in November 2013, building desktop applications and designing databases.',
      'Over the years that foundation grew into architecting and delivering scalable systems end to end — from data modeling and backend services to infrastructure, CI/CD, and the user-facing frontend.',
    ],
  },
  {
    icon: 'savings',
    value: '$200K+',
    label: 'Annual Savings',
    description: 'Reduced authentication costs',
    details: [
      'Deep analysis and research of real consumption patterns revealed where the platforms were overspending.',
      'Those findings shaped an infrastructure modernization effort that changed how resources are provisioned and consumed, which turned into crucial recurring cost savings for the business.',
    ],
  },
  {
    icon: 'trending',
    value: '6x',
    label: 'Infrastructure Efficiency',
    description: 'Improved developer productivity and system performance',
    details: [
      'Keeping the codebase clean and on the latest versions of modern development frameworks boosted efficiency across the board.',
      'Picking the right cloud services to host each solution hit the best balance of cost and productivity, delivering the performance the business needed without overpaying for it.',
    ],
  },
  {
    icon: 'people',
    value: '10+',
    label: 'High-impact Projects',
    description: 'Delivered across multiple industries',
    details: [
      'I have contributed to projects across a range of domains — healthcare, retail, finance, commodity data, and domain name services among them.',
      'Working in regulated and high-volume industries taught me to adapt quickly to unfamiliar business rules and to build solutions that fit the domain rather than fight it.',
    ],
  },
];

export const projects = [
  {
    icon: 'lock',
    title: 'Identity & Access Platform',
    company: company('CarMax'),
    description:
      'Modernizing customer identity infrastructure across the CarMax digital ecosystem. Built secure, scalable solutions handling millions of authentications daily.',
    tags: ['.NET', 'React', 'AWS', 'OAuth 2.0', 'Azure'],
  },
  {
    icon: 'cloud',
    title: 'Serverless Business Pipeline',
    company: company('Argus Media'),
    description:
      'Event-driven serverless pipeline for processing and delivering business-critical data. Highly scalable and cost-effective architecture.',
    tags: ['AWS Lambda', 'C#', 'DynamoDB', 'EventBridge'],
  },
];

export interface ExperienceEntry {
  years: string;
  company: Company;
  role: string;
  description: string;
  /** Achievement bullets shown in the detail dialog. */
  highlights?: string[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    years: '2025 – Present',
    company: company('CarMax'),
    role: 'Senior Software Engineer',
    description:
      'Building and modernizing identity & access platforms. Leading initiatives to improve security, reduce costs, and enhance customer experience.',
    highlights: [
      'Strengthened infrastructure security by enforcing identity-based RBAC for database access across every service, eliminating shared account keys and long-lived secrets.',
      'Extended passkey (WebAuthn) support — enabled passkeys as a second factor and rebuilt credential management so customers can review and remove their own passkeys.',
      'Hardened certificate handling: reworked the retry logic, removed the silent failure paths, and surfaced explicit errors so resolution problems fail loudly instead of degrading quietly.',
      'Migrated caching to Azure Managed Redis with RBAC everywhere it is consumed, cutting cache infrastructure costs by 3x while keeping the new tier inside its budget ceiling.',
      'Made the platform recoverable under pressure with disaster recovery pipelines and a documented runbook, plus autoscaling and availability tests.',
      'Raised code quality across the platform and kept it current, migrating the backend services and shared packages to the latest .NET release.',
      'Delivered customer-facing work end to end: multi-step pre-qualification flows, a React rebuild of the customer microsite aligned with the sign-in experience, and analytics event tracking across both.'
    ],
    tags: ['.NET', 'React', 'C#', 'Azure', 'Bicep', 'AI', 'CosmosDb', 'Redis', 'Azure DevOps', 'GitHub'],
  },
  {
    years: '2022 – 2025',
    company: company('Argus Media'),
    role: 'Senior Software Engineer',
    description:
      'Designed and built serverless architectures and backend services for business operations and data processing pipelines.',
    highlights: [
      'Designed and delivered the internal platforms behind user management, data pipelines, and campaign automation, giving business teams the headroom to scale operations and contributing to a 15% increase in revenue.',
      'Led the move to serverless on AWS Lambda end to end — service code, CI/CD pipelines, and the infrastructure-as-code behind them — cutting infrastructure costs by more than 6x while letting both APIs and customer-facing applications scale with real demand instead of standing capacity.',
      'Strengthened reliability across the core services by implementing disaster recovery and modernizing CI/CD, raising deployment safety and environment visibility for every component that shipped through it.',
      'Unified authentication on Microsoft Entra ID and Azure B2C, tightening identity security and giving people one consistent sign-in experience across applications.',
      'Reworked long-standing components around how people actually used them, cutting engineering workload by 40% through fewer change requests.',
      'Mentored engineers joining the team, shortening onboarding and lifting the productivity of the group as a whole.',
    ],
    tags: ['.NET', 'React', 'C#', 'AWS', 'Lambda', 'DynamoDB', 'RabbitMq', 'Redis', 'GitHub'],
  },
  {
    years: '2021 – 2022',
    company: company('Namecheap'),
    role: 'Senior Software Engineer',
    description:
      'Developed high-performance applications and APIs. Improved system reliability and developer productivity.',
    highlights: [
      'Delivered core pieces of a new domain-lifecycle platform as part of the team replacing a monolithic legacy system — one that had to keep selling domains under strict ICANN rules throughout the transition.',
      'Built out the UI layer on a micro-frontend architecture, delivering modules that ship independently rather than tying every interface change to one frontend release.',
      'Rebuilt backend services and APIs on modern .NET, retiring legacy components and shortening the path from feature request to release.',
      'Covered the full stack of the product — interface, services, database, and CI/CD — so improvements landed end to end rather than stopping at a layer boundary.',
      'Held quality up with unit and integration tests, keeping a system bound by registry rules dependable as it took on more of the legacy platform.',
    ],
    tags: ['.NET', 'C#','React', 'SQL', 'AWS'],
  },
  {
    years: '2019 – 2021',
    company: company('Amido'),
    role: 'Software Engineer',
    description:
      'Built a gRPC-based locking system for fast service-to-service communication and a microservices health check dashboard with .NET Core 3 and Angular',
    highlights: [
      'Designed and implemented a distributed locking platform end to end — from gathering requirements through database design, APIs, and service integration — with gRPC keeping service-to-service communication fast enough for real-world access control.',
      'Built a microservice health dashboard in .NET Core and React that made the state of every service and its resources visible at a glance, so a growing estate of services surfaced outages as they happened instead of after customers reported them.',
      'Integrated the platform with emergency services alongside the team — the work that let an ambulance crew reach a person locked inside their home and in need of urgent medical help.',
    ],
    tags: ['.NET', 'C#', 'gRPC', 'Angular', 'GraphQL'],
  },
  {
    years: '2018',
    company: company('DataArt'),
    role: 'Software Engineer',
    description:
      'Designed a database for a medical research budgeting system and improved API performance and scalability on healthcare software projects.',
    highlights: [
      'Designed and implemented the database behind a medical research budgeting system, modeling complex budgeting data so it stayed reliable and quick to query — inside the regulatory constraints that come with the medical field.',
      'Developed the API between the interface and the backend, giving both sides one consistent contract to build against.',
    ],
    tags: ['.NET', 'C#', 'SQL', 'TeamCity'],
  },
  {
    years: '2016 – 2019',
    company: company('LeadsMarket'),
    role: 'Software Engineer',
    description:
      'Built a platform with flexible business logic and a client payment calculation module, improving processing speed by 30%.',
    highlights: [
      'Delivered core parts of a new business-pipeline platform built around a codeless logic constructor, so business users could change and test behaviour themselves while the system held its response times through peak hours.',
      'Designed and implemented the relational database and API underneath it, shaping the data model that the configurable rules run on.',
      'Rebuilt the module that calculates client payments from those business rules, making calculations 30% faster no matter how complex the rules became.',
    ],
    tags: ['.NET', 'C#', 'API', 'MS SQL Server', 'Azure'],
  },
  {
    years: '2013 – 2016',
    company: company('SoftServe'),
    role: 'Software Engineer',
    description:
      'Built a foundation in healthcare software development, delivering new platform features and functionality to handle large data volumes efficiently.',
    highlights: [
      'Designed and implemented functionality that lifted the data-volume limits large customers ran into after years of accumulation, sparing them the maintenance costs that working around those limits would have carried.',
      'Supported and extended a long-running healthcare platform, turning user requests into features that fit the compliance rules the domain imposes.',
      'Built proof of concepts and the documentation behind them, giving the team tested ground to stand on before committing to a direction.',
    ],
    tags: ['.NET', 'VB', 'SQL','PowerBuilder', 'Sybase'],
  },
];

export interface School {
  name: string;
  /** Link to the university's official site. */
  url?: string;
  location: string;
}

export const education = [
  {
    years: 'Graduated 2015',
    degree: 'Specialist',
    school: {
      name: "Dnipropetrovs'k National University",
      url: 'https://www.dnu.dp.ua/',
      location: 'Dnipro, Ukraine',
    },
    description: 'Department of Applied Mathematics — Software systems.',
  },
  {
    years: 'Graduated 2013',
    degree: 'Bachelor',
    school: {
      name: 'Kryvyi Rih National University',
      url: 'https://knu.edu.ua/',
      location: 'Kryvyi Rih, Ukraine',
    },
    description: 'Department of Information Technology — Software systems.',
  },
] satisfies Array<{ years: string; degree: string; school: School; description: string }>;

export const techStack = [
  '.NET',
  'C#',
  'React',
  'TypeScript',
  'AWS',
  'Azure',
  'Docker',
  'PostgreSQL',
  'Git',
  'Redis',
  'RabbitMq',
  'AI',
  'MCP Servers',
  'VB',
  'SQL',
  'Sybase',
  'TeamCity',
  'Octopus',
  'GitHub Actions',
  'gRPC',
  'AWS Lambda Functions',
  'AWS API Gateway',
  'AWS EC2',
  'AWS Elastic LoadBalancer',
  'AWS DynamoDb',
  'AWS S3',
  'AWS Route53',
  'AWS CloudFormation',
  'AWS CloudFront',
  'Azure AppService',
  'Azure CosmosDb',
  'Azure Managed Redis',
  'Azure Blob Storage',
  'Azure ServiceBus',
  'Bicep',
  'CSS',
  'Tailwind',
  'Material UI',
  'NHibernate',
  'Dapper',
  'NUnit',
  'xUnit'
];

export interface Testimonial {
  name: string;
  role: string;
  company: Company;
  quote: string;
  /** Path to a small round photo (e.g. in /public/testimonials/). Falls back to initials when unset. */
  avatarUrl?: string;
  /** Link to the person's LinkedIn profile. */
  profileUrl?: string;
}

// Real LinkedIn recommendations from https://www.linkedin.com/in/andrii-zelyk/
export const testimonials: Testimonial[] = [
  {
    name: 'Igor Bulenko',
    role: 'Senior Data Engineer',
    company: company('SoftServe'),
    quote:
      'Andrii is a well-organized and responsible individual who consistently strives to deliver his work to the highest standard. He approaches tasks with dedication and a strong attention to detail, ensuring that outcomes are both accurate and efficient. He has demonstrated a proactive position toward continuous improvement and doesn’t hesitate to go the extra mile when needed.',
    profileUrl: 'https://www.linkedin.com/in/igor-bulenko-94434451/',
    avatarUrl: '/liib.jpeg',
  },
  {
    name: 'Aleksandr Holub',
    role: 'Senior Software Engineer',
    company: company('Namecheap'),
    quote:
      'I had the pleasure of working with Andrii at Namecheap, and I can confidently say he’s one of those engineers who just gets it. He picks up new technologies fast, applies his skills effectively, and isn’t afraid to dive deep into complex problems. Beyond that, he’s great at sharing knowledge with the team, which made a real impact on our project. If you’re looking for someone who’s proactive, adaptable, and genuinely passionate about what he does, Andrii is your guy!',
    profileUrl: 'https://www.linkedin.com/in/alex-holub-ua/',
    avatarUrl: '/liah.jpeg',
  },
  {
    name: 'Anzhelika Kyrychuk',
    role: 'Frontend Engineer',
    company: company('LeadsMarket'),
    quote:
      'I had the pleasure of working with Andrii on multiple projects, and his expertise in backend development was truly impressive. He built robust, efficient APIs that were both scalable and easy to integrate, making our development workflow much smoother. Beyond his technical skills, Andrii’s clear and effective communication ensured seamless collaboration - no cryptic backend riddles, just straightforward and productive teamwork. Working with him was a great experience, and I highly recommend him for any backend development role.',
    profileUrl: 'https://www.linkedin.com/in/anzhelika-kyrychuk-18892558/',
    avatarUrl: '/liak.jpeg',
  },
  {
    name: 'Illia Misiura',
    role: '.NET Software Engineer',
    company: company('Argus Media'),
    quote:
      'I had a big pleasure to work with Andrii in one team. He is a highly skilled Senior .NET Developer with exceptional expertise in AWS cloud development and the .NET ecosystem. His deep technical knowledge and problem-solving abilities made it incredibly comfortable and efficient to collaborate with him. I was really impressed by his ability to resolve complex issues quickly and guide the team through challenging tasks with ease. Working with Andrii was a rewarding experience, and I truly value the insights and best practices he shared. I would highly recommend Andrii to any team looking for a dedicated and experienced professional with excellent communication skills!',
    profileUrl: 'https://www.linkedin.com/in/illia-misiura/',
    avatarUrl: '/liim.jpeg',
  },
  {
    name: 'Angelika Cherkez',
    role: 'QA Engineer',
    company: company('Argus Media'),
    quote:
      'Working with Andrii is a great experience. He is detail-oriented, proactive, and approaches tasks with a strong problem-solving mindset. His ability to analyse complex situations and provide effective solutions makes him a valuable team member. Andrii communicates clearly, is always open to discussion, and ensures that projects move forward efficiently. His professionalism and dedication stand out in every task he takes on.',
    profileUrl: 'https://www.linkedin.com/in/angelika-ch/',
    avatarUrl: '/liach.jpeg',
  },
  {
    name: 'Jose Y. Villarroel',
    role: 'Senior Software Engineer',
    company: company('Argus Media'),
    quote:
      'I’ve had the privilege of working with Andrii at Argus Media, and he is an outstanding senior software engineer. His deep expertise, problem-solving skills, and commitment to high-quality solutions make him a valuable asset to any team. He’s not only technically brilliant but also a great collaborator. I highly recommend him!',
    profileUrl: 'https://www.linkedin.com/in/jose-yerel/',
    avatarUrl: '/lijyv.jpeg',
  },
  {
    name: 'Denys Redko',
    role: 'Software Engineer',
    company: company('Argus Media'),
    quote:
      'Andrii is an exceptional Senior .NET Developer with deep expertise in the .NET ecosystem, consistently delivering high-quality, scalable, and efficient solutions. His problem-solving skills, proactive approach, and ability to optimize performance make him a valuable asset to any team. Beyond technical expertise, Andrii is a great collaborator and mentor, always willing to share knowledge and support colleagues. Whether enhancing existing systems or building robust applications from scratch, he brings reliability, innovation, and strong attention to detail. I highly recommend Andrii for any organization seeking a skilled and dedicated .NET professional.',
    profileUrl: 'https://www.linkedin.com/in/denys-redko/',
    avatarUrl: '/lidr.jpeg',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  // Hidden while the Projects section is off the page (see App.tsx).
  // { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
