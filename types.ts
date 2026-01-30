import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string; desc: string; icon?: LucideIcon }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export interface ServiceDetailContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  benefits: string[];
  tools: string[];
  faqs: { question: string; answer: string }[];
  icon: LucideIcon;
}

export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: { linkedin?: string; twitter?: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CommunityUser {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  role: 'Student' | 'Alumni' | 'Mentor';
}

export interface CommunityComment {
  id: string;
  user: CommunityUser;
  content: string;
  timestamp: string;
}

export interface CommunityPost {
  id: string;
  user: CommunityUser;
  content: string;
  image?: string;
  likes: number;
  comments: CommunityComment[];
  timestamp: string;
  isLiked?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  status: 'Published' | 'Draft';
  category: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
}

export interface JobListing {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  salaryRange: string;
  openings: number;
  isActive: boolean;
  postedDate: string;
  experience: string;
}

export enum LocationType {
  MANCHERIAL = 'Mancherial',
  KARIMNAGAR = 'Karimnagar'
}