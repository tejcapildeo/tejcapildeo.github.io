export const personal = {
  name: 'Tej Capildeo',
  title: 'AI Engineer',
  tagline: 'Building intelligent systems at the intersection of AI and software engineering.',
  email: 'tjkool500@gmail.com',
  github: 'https://github.com/tejcapildeo',
  linkedin: 'https://www.linkedin.com/in/tej-capildeo-099871292/',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from the University of Toronto, specializing in building intelligent, AI-powered systems.",
    "Currently working as an AI Engineer at a major Canadian financial institution through TCS, I design and implement agentic workflows, RAG pipelines, and production-ready GenAI applications.",
    "I'm passionate about the applied side of AI — turning state-of-the-art models into tools that actually work in enterprise environments.",
  ],
  education: {
    school: 'University of Toronto',
    degree: 'B.Sc. Computer Science · Economics Minor',
    period: 'Sep 2021 – Jan 2025',
  },
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'TCS',
    role: 'AI Engineer',
    period: 'Feb 2025 – Present',
    location: 'Toronto, ON',
    description:
      'Consulting at a major Canadian financial institution. Designing and deploying GenAI solutions including agentic workflows, RAG pipelines, and AI-powered tooling for enterprise teams.',
    tags: ['AWS Bedrock', 'LangGraph', 'RAG', 'MCP', 'Claude', 'Python'],
  },
  {
    company: 'Intelligent Adaptive Interventions Lab',
    role: 'Research Assistant',
    period: 'Sep 2024 – Dec 2024',
    location: 'University of Toronto',
    description:
      "Contributed to research at UofT's IAI Lab, working at the intersection of AI and adaptive intervention systems.",
    tags: ['Research', 'Python', 'AI'],
  },
  {
    company: 'Proman',
    role: 'Software Developer Intern',
    period: 'Jun 2023 – Aug 2023',
    location: 'Toronto, ON',
    description: 'Contributed to software development initiatives across the engineering team.',
    tags: ['Software Development'],
  },
];

export interface Project {
  title: string;
  badge: string;
  featured: boolean;
  description: string;
  detail?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'GenAI Jira Story Generator',
    badge: 'Enterprise POC',
    featured: true,
    description:
      'Agentic RAG system that generates Jira user story titles from input, with human-in-the-loop approval. The agent uses semantic search over a knowledge base of hundreds of examples to generate high-quality titles, and can also update titles of existing stories in the database.',
    detail:
      'Built on AWS Bedrock (Claude 3.5 Sonnet) with a FAISS vector store for retrieval. LangGraph orchestrates the agent decision-making, FastMCP exposes callable tools, and Streamlit powers the interactive approval frontend.',
    tags: ['AWS Bedrock', 'Claude 3.5 Sonnet', 'LangGraph', 'FastMCP', 'FAISS', 'RAG', 'Streamlit', 'Python'],
  },
  {
    title: 'QA Test Case Automation Agent',
    badge: 'Enterprise POC',
    featured: false,
    description:
      'Agentic workflow that accelerates QA activities by auto-generating or editing test cases and Gherkin automation scripts for new user stories, using a RAG pipeline over existing test case data with human-in-the-loop approval.',
    tags: ['Claude Sonnet', 'AWS Bedrock', 'OpenSearch', 'LangGraph', 'Pydantic', 'Python'],
  },
  {
    title: 'Hackathon Platform Backend',
    badge: 'Internal Tool',
    featured: false,
    description:
      'Serverless AWS backend powering a large-scale internal hackathon — supporting participant flows, team management, judge scoring, event scheduling, and real-time support ticketing.',
    tags: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFront', 'EC2'],
  },
  {
    title: 'Frontend Feature Development',
    badge: 'Banking Application',
    featured: false,
    description:
      'Built Angular/TypeScript frontend pages with NgRx state management and REST API integration for a core banking product, handling routing, services, and end-to-end data flow.',
    tags: ['Angular', 'TypeScript', 'NgRx'],
  },
  {
    title: 'Chatbot SharePoint Integration',
    badge: 'Enterprise POC',
    featured: false,
    description:
      'Implemented a Microsoft Graph API integration to persist chatbot conversation data to SharePoint, enabling cross-team visibility into resolved support interactions.',
    tags: ['Microsoft Graph API', 'SharePoint', 'Next.js', 'TypeScript'],
  },
];

export const skills: Record<string, string[]> = {
  'AI / GenAI': ['LangChain', 'LangGraph', 'RAG', 'MCP', 'AWS Bedrock', 'FAISS', 'OpenSearch', 'Streamlit', 'Prompt Engineering'],
  'Cloud': ['AWS Lambda', 'EC2', 'DynamoDB', 'S3', 'API Gateway', 'CloudFront', 'CloudWatch', 'Docker'],
  'Frontend': ['React', 'Angular', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'NgRx'],
  'Backend': ['Node.js', 'Python', 'FastAPI', 'Django', 'Flask'],
  'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'C'],
  'Tools': ['Git', 'Pydantic', 'Figma'],
};
