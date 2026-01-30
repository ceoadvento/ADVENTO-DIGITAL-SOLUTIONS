import { 
  Cpu, 
  BarChart3, 
  Globe, 
  Search, 
  MessageSquare, 
  Users, 
  Lightbulb, 
  Briefcase,
  GraduationCap,
  TrendingUp,
  Award,
  Code2,
  Smartphone,
  PenTool,
  Megaphone,
  Rocket
} from 'lucide-react';
import { NavItem, Service, CourseModule, Testimonial, Stat, ServiceDetailContent, TeamMember, FaqItem, CommunityPost, BlogPost, JobListing } from './types';

export const CONTACT_INFO = {
  phone: '6366312856',
  email: 'hello@advento.in',
  locations: {
    mancherial: {
      title: 'Mancherial HQ',
      address: 'JB Nagar, Opposite Karur Vysya Bank, Near Bellampalli Chowrasta, Mancherial, Telangana 504208',
      mapUrl: 'https://maps.google.com/maps?q=Advento+Mancherial&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    karimnagar: {
      title: 'Karimnagar Hub',
      address: 'Near Geetha Bhavan, Behind Apoorva Degree and PG College, Karimnagar, Telangana 505001',
      mapUrl: 'https://maps.google.com/maps?q=Advento+Karimnagar&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about',
    subItems: [
      { label: 'Our Story', path: '/about', desc: 'Mission, Vision & Team', icon: Users },
      { label: 'Blog Insights', path: '/blog', desc: 'Latest News & Trends', icon: PenTool }
    ]
  },
  { 
    label: 'Services', 
    path: '/services',
    subItems: [
      { label: 'SEO Optimization', path: '/services/seo', desc: 'Rank #1 on Google with AI', icon: Search },
      { label: 'Social Media', path: '/services/social-media', desc: 'Viral Content Strategy', icon: MessageSquare },
      { label: 'PPC Marketing', path: '/services/ppc', desc: 'High ROAS Ad Campaigns', icon: TrendingUp },
      { label: 'Web Development', path: '/services/web-dev', desc: 'Headless React Websites', icon: Code2 },
      { label: 'Content Marketing', path: '/services/content', desc: 'Brand Storytelling', icon: PenTool },
      { label: 'AI Consulting', path: '/services/consulting', desc: 'Business Automation', icon: Cpu },
    ]
  },
  { label: 'Courses', path: '/course' },
  { label: 'Careers', path: '/careers' },
  { label: 'Community', path: '/community' },
  { label: 'Contact', path: '/contact' },
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of SEO: Generative Search Experience",
    slug: "future-of-seo-sge",
    author: "Paidakula Paramesh",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2670&auto=format&fit=crop",
    excerpt: "Google's SGE is changing how we rank. Here is what you need to know to stay ahead.",
    content: "Search Generative Experience (SGE) is shifting the paradigm from 'searching' to 'asking'. Traditional keywords are losing relevance to semantic context...",
    status: 'Published',
    category: 'SEO',
    seo: {
      metaTitle: "Future of SEO 2024 | Advento Insights",
      metaDescription: "Learn how Generative AI is impacting Google Search and what marketers need to do.",
      keywords: "SEO, SGE, AI Marketing, Google Search"
    }
  },
  {
    id: 2,
    title: "Maximizing ROAS with Meta Advantage+",
    slug: "meta-advantage-plus-roas",
    author: "Suluva Rajkumar",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    excerpt: "Stop manual targeting. Let AI find your customers with Facebook's new tools.",
    content: "Meta Advantage+ shopping campaigns utilize machine learning to automate targeting, bidding, and creative delivery...",
    status: 'Published',
    category: 'PPC',
    seo: {
      metaTitle: "Meta Advantage+ Guide | Advento",
      metaDescription: "Increase your Return on Ad Spend using Meta's AI tools.",
      keywords: "Facebook Ads, Meta, ROAS, Digital Marketing"
    }
  }
];

export const INITIAL_JOBS: JobListing[] = [
  {
    id: 1,
    title: 'Senior SEO Specialist',
    description: 'We are looking for an experienced SEO strategist to lead our organic growth team. Must have experience with technical SEO and programmatic SEO.',
    location: 'Mancherial / Remote',
    type: 'Full-time',
    salaryRange: '₹5L - ₹8L PA',
    openings: 2,
    isActive: true,
    postedDate: '2024-03-01',
    experience: '3+ Years'
  },
  {
    id: 2,
    title: 'Content Writer (Tech)',
    description: 'Create compelling blogs, whitepapers, and case studies for our B2B SaaS clients.',
    location: 'Remote',
    type: 'Part-time',
    salaryRange: '₹15k - ₹25k / Month',
    openings: 1,
    isActive: true,
    postedDate: '2024-03-05',
    experience: '1-2 Years'
  }
];

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  'seo': {
    id: 'seo',
    title: 'Search Engine Optimization',
    subtitle: 'Dominate Search Results with AI-Driven Strategies',
    description: 'Stop guessing what Google wants. Our AI-driven SEO strategies utilize predictive analytics to identify high-value opportunities before your competitors do.',
    challenge: 'Is your website lost on page 2? Are you getting traffic but no leads? Traditional SEO often fails to adapt to modern semantic search algorithms.',
    solution: 'We implement a holistic "Topic Cluster" strategy reinforced by technical excellence and high-authority backlinks.',
    icon: Search,
    features: [
      { title: 'Technical SEO Audit', desc: 'Comprehensive analysis of your website structure, speed, and mobile responsiveness.' },
      { title: 'Keyword Strategy', desc: 'Targeting high-intent keywords that drive conversion, not just traffic.' },
      { title: 'On-Page Optimization', desc: 'Optimizing meta tags, content structure, and internal linking for maximum relevance.' },
      { title: 'Link Building', desc: 'Acquiring high-quality backlinks from reputable industry sources.' }
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'We analyze your current standing and identify gaps.' },
      { step: '02', title: 'Strategy', desc: 'We build a custom roadmap for ranking improvement.' },
      { step: '03', title: 'Execution', desc: 'Implementation of technical fixes and content creation.' },
      { step: '04', title: 'Reporting', desc: 'Transparent monthly reports on rankings and traffic.' }
    ],
    benefits: ['Increase Organic Traffic', 'Higher Conversion Rates', 'Better Brand Credibility', 'Long-term ROI'],
    tools: ['Semrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'SurferSEO'],
    faqs: [
      { question: 'How long does it take to see results?', answer: 'SEO is a long-term strategy. Typically, significant improvements are seen within 3 to 6 months, but technical fixes can yield quicker wins.' },
      { question: 'Do you guarantee #1 rankings?', answer: 'No ethical agency can guarantee specific rankings due to Google\'s volatile algorithms. However, we guarantee improved visibility and traffic quality.' }
    ]
  },
  'social-media': {
    id: 'social-media',
    title: 'Social Media Marketing',
    subtitle: 'Build a Loyal Community Around Your Brand',
    description: 'We craft social media strategies that engage, entertain, and convert. From Instagram Reels to LinkedIn thought leadership, we manage your presence across all major platforms.',
    challenge: 'Posting without engagement? Struggling to create consistent content? Social algorithms punish inactivity and irrelevance.',
    solution: 'We create a content calendar powered by trend analysis and audience psychology to ensure every post adds value.',
    icon: MessageSquare,
    features: [
      { title: 'Content Creation', desc: 'High-quality visuals, videos, and copy tailored to each platform.' },
      { title: 'Community Management', desc: 'Active engagement with your audience to build trust.' },
      { title: 'Influencer Marketing', desc: 'Collaborating with key opinion leaders in your niche.' },
      { title: 'Analytics & Insights', desc: 'Tracking engagement rates, reach, and follower growth.' }
    ],
    process: [
      { step: '01', title: 'Persona', desc: 'Defining your target audience and brand voice.' },
      { step: '02', title: 'Calendar', desc: 'Planning a consistent content schedule.' },
      { step: '03', title: 'Creation', desc: 'Producing engaging assets and copy.' },
      { step: '04', title: 'Engage', desc: 'Interacting with comments and messages.' }
    ],
    benefits: ['Brand Awareness', 'Customer Loyalty', 'Direct Customer Feedback', 'Viral Potential'],
    tools: ['Canva', 'Adobe Suite', 'Buffer', 'Hootsuite', 'Meta Business Suite'],
    faqs: [
      { question: 'Which platforms should I be on?', answer: 'It depends on your B2B or B2C nature. LinkedIn is great for B2B, while Instagram/TikTok excel for B2C visual brands.' },
      { question: 'Do you handle comments?', answer: 'Yes, community management is part of our comprehensive packages to ensure your audience feels heard.' }
    ]
  },
  'ppc': {
    id: 'ppc',
    title: 'PPC & Performance Marketing',
    subtitle: 'Instant Traffic, Measurable ROI',
    description: 'Stop wasting money on ads that don\'t convert. Our performance marketing experts use advanced targeting, A/B testing, and AI optimization.',
    challenge: 'Rising ad costs and low conversion rates? It’s easy to burn budget without the right targeting parameters.',
    solution: 'We focus on ROAS (Return on Ad Spend). We rigorously test creatives and audiences to find the winning formula.',
    icon: TrendingUp,
    features: [
      { title: 'Google Ads', desc: 'Search, Display, and Shopping campaigns optimized for sales.' },
      { title: 'Social Ads', desc: 'Targeted campaigns on Facebook, Instagram, and LinkedIn.' },
      { title: 'Retargeting', desc: 'Re-engaging visitors who didn\'t convert the first time.' },
      { title: 'A/B Testing', desc: 'Continuous testing of creatives and copy to find winners.' }
    ],
    process: [
      { step: '01', title: 'Setup', desc: 'Configuring pixel tracking and audience segments.' },
      { step: '02', title: 'Launch', desc: 'Deploying campaigns with initial hypotheses.' },
      { step: '03', title: 'Optimize', desc: 'Daily monitoring and bid adjustments.' },
      { step: '04', title: 'Scale', desc: 'Increasing budget on winning ad sets.' }
    ],
    benefits: ['Immediate Results', 'Precise Targeting', 'Scalable Growth', 'Clear Attribution'],
    tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Google Analytics 4', 'Hotjar'],
    faqs: [
      { question: 'What is the minimum budget?', answer: 'We recommend a minimum ad spend of ₹30,000/month to gather enough data for optimization, excluding our management fee.' },
      { question: 'How do you track success?', answer: 'We set up conversion tracking for leads, calls, or purchases, so you know exactly how much revenue every rupee generates.' }
    ]
  },
  'web-dev': {
    id: 'web-dev',
    title: 'Web Design & Development',
    subtitle: 'Fast, Secure, and Stunning Websites',
    description: 'Your website is your digital storefront. We build custom, responsive websites using the latest technologies (React, Next.js).',
    challenge: 'Slow loading times, broken layouts on mobile, and outdated design are killing your conversions.',
    solution: 'We build "Headless" websites that decouple the front-end from the back-end for blazing fast speeds and ultimate security.',
    icon: Code2,
    features: [
      { title: 'Custom UI/UX', desc: 'Unique designs tailored to your brand identity.' },
      { title: 'Responsive Design', desc: 'Flawless experience on mobile, tablet, and desktop.' },
      { title: 'Speed Optimization', desc: 'Lightning-fast load times for better SEO and user retention.' },
      { title: 'CMS Integration', desc: 'Easy-to-manage content systems for your team.' }
    ],
    process: [
      { step: '01', title: 'Wireframe', desc: 'Blueprinting the structure and user flow.' },
      { step: '02', title: 'Design', desc: 'Creating high-fidelity mockups.' },
      { step: '03', title: 'Develop', desc: 'Coding the frontend and backend.' },
      { step: '04', title: 'Launch', desc: 'Testing and deploying to live servers.' }
    ],
    benefits: ['Better First Impression', 'Higher SEO Rankings', 'Increased Conversions', 'Security'],
    tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Node.js'],
    faqs: [
      { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. We take a mobile-first approach to design and development.' },
      { question: 'Can I update content myself?', answer: 'Yes, we can integrate user-friendly CMS platforms like Sanity, Strapi, or WordPress.' }
    ]
  },
  'content': {
    id: 'content',
    title: 'Content Marketing',
    subtitle: 'Storytelling That Drives Action',
    description: 'Content is king. We produce high-quality blogs, whitepapers, case studies, and video scripts that establish your authority.',
    challenge: 'Generic content that reads like AI? Customers crave authenticity and expert insights.',
    solution: 'We combine industry expertise with persuasive copywriting to create content that educates and sells simultaneously.',
    icon: PenTool,
    features: [
      { title: 'Blog Writing', desc: 'SEO-optimized articles that answer customer questions.' },
      { title: 'Copywriting', desc: 'Persuasive sales copy for landing pages and emails.' },
      { title: 'Video Scripts', desc: 'Engaging scripts for YouTube and social media.' },
      { title: 'E-books', desc: 'Lead magnets to capture customer emails.' }
    ],
    process: [
      { step: '01', title: 'Research', desc: 'Identifying trending topics and keywords.' },
      { step: '02', title: 'Drafting', desc: 'Writing compelling content.' },
      { step: '03', title: 'Editing', desc: 'Refining tone and ensuring accuracy.' },
      { step: '04', title: 'Publish', desc: 'Distributing content across channels.' }
    ],
    benefits: ['Thought Leadership', 'Organic Traffic', 'Lead Generation', 'Customer Education'],
    tools: ['Grammarly', 'Hemingway', 'Google Trends', 'AnswerThePublic'],
    faqs: [
      { question: 'Do you use AI to write?', answer: 'We use AI for research and outlining, but the final writing is always done by human experts to ensure nuance and emotion.' },
      { question: 'How much content do I need?', answer: 'Consistency is key. We usually recommend at least 2-4 high-quality blog posts per month.' }
    ]
  },
  'consulting': {
    id: 'consulting',
    title: 'AI Strategic Consulting',
    subtitle: 'Future-Proof Your Business',
    description: 'Leverage the power of Artificial Intelligence to automate workflows, analyze data, and predict market trends.',
    challenge: 'Feeling left behind by the AI revolution? Unsure how to implement AI without disrupting current operations?',
    solution: 'We provide a phased roadmap to integrate AI tools that solve specific business problems, starting with low-risk, high-reward pilots.',
    icon: Cpu,
    features: [
      { title: 'Workflow Automation', desc: 'Replacing repetitive tasks with AI agents.' },
      { title: 'Data Analysis', desc: 'Extracting actionable insights from your data lakes.' },
      { title: 'Custom AI Models', desc: 'Fine-tuning models for your specific business needs.' },
      { title: 'Training', desc: 'Upskilling your workforce to use AI tools effectively.' }
    ],
    process: [
      { step: '01', title: 'Assess', desc: 'Evaluating current tech stack and bottlenecks.' },
      { step: '02', title: 'Plan', desc: 'Designing an AI integration roadmap.' },
      { step: '03', title: 'Implement', desc: 'Deploying AI solutions.' },
      { step: '04', title: 'Monitor', desc: 'Ensuring performance and compliance.' }
    ],
    benefits: ['Operational Efficiency', 'Cost Reduction', 'Innovation', 'Competitive Advantage'],
    tools: ['OpenAI API', 'LangChain', 'Python', 'Zapier', 'Make.com'],
    faqs: [
      { question: 'Is AI expensive to implement?', answer: 'Not necessarily. Many AI solutions can be implemented using existing SaaS tools for a low monthly cost.' },
      { question: 'Will AI replace my employees?', answer: 'AI is designed to augment your team, removing drudgery so they can focus on high-value creative and strategic work.' }
    ]
  }
};

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    title: 'AI Strategic Consulting',
    description: 'Transform your business model with cutting-edge AI integration strategies tailored for growth.',
    icon: Cpu,
    link: '/services/consulting'
  },
  {
    id: 'seo',
    title: 'Data-Driven SEO',
    description: 'Dominate search results using predictive analytics and semantic content optimization.',
    icon: Search,
    link: '/services/seo'
  },
  {
    id: 'social',
    title: 'Social Intelligence',
    description: 'Leverage audience sentiment analysis to craft viral social media campaigns.',
    icon: Globe,
    link: '/services/social-media'
  },
  {
    id: 'ppc',
    title: 'Performance Marketing',
    description: 'Maximize ROI with automated bidding strategies and conversion rate optimization.',
    icon: TrendingUp,
    link: '/services/ppc'
  },
  {
    id: 'web-dev',
    title: 'Modern Web Development',
    description: 'Blazing fast, SEO-ready websites built on React and Next.js.',
    icon: Code2,
    link: '/services/web-dev'
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'Digital Foundation & Strategy',
    duration: 'Week 1-2',
    topics: ['Consumer Psychology', 'Digital Ecosystems', 'Market Research', 'Competitor Analysis']
  },
  {
    id: 2,
    title: 'AI Tools & Automation',
    duration: 'Week 3-5',
    topics: ['Prompt Engineering', 'Generative AI for Content', 'Chatbot Creation', 'Workflow Automation']
  },
  {
    id: 3,
    title: 'SEO & Content Mastery',
    duration: 'Week 6-8',
    topics: ['Technical SEO Audit', 'Keyword Strategy', 'Content Clustering', 'Link Building Strategies']
  },
  {
    id: 4,
    title: 'Performance Marketing (Ads)',
    duration: 'Week 9-11',
    topics: ['Google Ads Search & Display', 'Meta (Facebook/Insta) Ads', 'Retargeting Strategies', 'Analytics & Attribution']
  },
  {
    id: 5,
    title: 'Freelancing & Agency Building',
    duration: 'Week 12',
    topics: ['Client Acquisition', 'Proposal Writing', 'Pricing Strategies', 'Personal Branding']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Paidakula Paramesh",
    role: "CEO & Director",
    bio: "A visionary leader guiding Advento's growth through innovation, strategy, and digital excellence. With deep expertise in marketing and brand transformation, Paramesh ensures every project aligns with Advento's mission — to build, scale, and empower businesses through intelligent digital solutions.",
    image: "https://advento.in/wp-content/uploads/2023/11/Paramesh.jpg" 
  },
  {
    id: 2,
    name: "Amirishetti Anil Teja",
    role: "Client Manager",
    bio: "A skilled relationship builder dedicated to client success. Anil bridges strategy and execution, ensuring that every Advento partnership delivers measurable outcomes through performance-driven collaboration.",
    image: "https://advento.in/wp-content/uploads/2023/11/Anil.jpg" 
  },
  {
    id: 3,
    name: "Suluva Rajkumar",
    role: "Digital Marketing Specialist",
    bio: "Rajkumar is an expert in campaign strategy, ad performance, and analytics. He focuses on building high-impact digital campaigns that drive visibility, engagement, and conversions across platforms.",
    image: "https://advento.in/wp-content/uploads/2023/11/Rajkumar.jpg"
  },
  {
    id: 4,
    name: "Sai Teja Jagati",
    role: "SEO & PPC Specialist",
    bio: "Sai specializes in search optimization and performance marketing. He drives visibility and traffic through data-led PPC campaigns and SEO frameworks that help brands dominate their digital space.",
    image: "https://advento.in/wp-content/uploads/2023/11/SaiTeja.jpg"
  },
  {
    id: 5,
    name: "MD.Imran Kaliq",
    role: "Corporate Sales",
    bio: "Imran specializes in Corporate Sales. He drives sales and collaborations through Advento's exclusive sales frameworks that help organizations to grow in digital space.",
    image: "https://advento.in/wp-content/uploads/2023/11/Imran.jpg"
  }
];

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What makes Advento different from other agencies?",
    answer: "We don't just execute; we innovate. Our 'AI-First' approach allows us to automate repetitive tasks and focus on high-level strategy, delivering 3x faster results than traditional agencies."
  },
  {
    question: "Do you offer job placement for students?",
    answer: "Yes, our 'Advento Career Launchpad' provides 100% placement assistance. We have tied up with 50+ hiring partners and help with resume building and mock interviews."
  },
  {
    question: "Can I hire you for a specific project?",
    answer: "Absolutely. We offer flexible engagement models including project-based, retainer-based, and hourly consulting for specific AI/Digital Marketing needs."
  },
  {
    question: "Where are your offline centers located?",
    answer: "We have state-of-the-art training centers in Mancherial (Main Road) and Karimnagar (Tower Circle). We also offer live interactive online classes."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content: "Advento's AI consulting completely revolutionized our lead generation process. The ROI has been phenomenal.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Digital Marketer",
    company: "Advento Alumni",
    content: "The training program is intense and incredibly practical. I landed a job at a top agency within a month of graduating.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Founder",
    company: "UrbanCart",
    content: "Their SEO strategies helped us rank for our most competitive keywords in just 4 months. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export const STATS: Stat[] = [
  { label: 'Students Trained', value: '2500', suffix: '+', icon: Users },
  { label: 'Success Rate', value: '96', suffix: '%', icon: TrendingUp },
  { label: 'Corporate Partners', value: '50', suffix: '+', icon: Briefcase },
  { label: 'Years Experience', value: '10', suffix: '+', icon: Award },
];

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    user: { id: 'u1', name: 'Priya Sharma', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', verified: true, role: 'Alumni' },
    content: 'Just cracked my first international client deal using the AI outreach strategies learned in Module 4! 🚀 Big thanks to @Sandeep Sir for the mentorship.',
    likes: 45,
    comments: [
      { id: 'c1', user: { id: 'u2', name: 'Rahul M', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', verified: false, role: 'Student' }, content: 'Congratulations Priya! Thats inspiring.', timestamp: '2h ago' }
    ],
    timestamp: '4h ago',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop'
  },
  {
    id: '2',
    user: { id: 'u3', name: 'Arjun Das', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', verified: false, role: 'Student' },
    content: 'Can anyone recommend good resources for advanced Programmatic SEO? I am struggling with the dataset structure.',
    likes: 12,
    comments: [],
    timestamp: '6h ago'
  }
];