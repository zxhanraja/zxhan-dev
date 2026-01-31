import React from 'react';

export type TechStack = 'React' | 'Next.js' | 'TypeScript' | 'Node.js' | 'Tailwind' | 'AWS' | 'Figma' | 'PostgreSQL' | 'GraphQL' | 'Python' | 'Go' | 'Rust' | 'MongoDB' | 'Supabase' | 'AI';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  status: 'Working' | 'Past' | 'Contract';
  location: string;
  period: string;
  description: string[];
  tech: TechStack[];
  logo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tech: TechStack[];
  status: 'Live' | 'Building' | 'Concept';
  link: string;
  featured: boolean;
  repoUrl?: string;
}

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl: string;
  content?: React.ReactNode;
  likes: number;
  views: number;
  comments: Comment[];
}

export interface NavLink {
  label: string;
  path: string;
  isExternal?: boolean;
}