// Navigation Item
export interface NavItem {
  label: string;
  href: string;
}

// Advantage Card
export interface Advantage {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Feature Card
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

// Statistic Item
export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

// News Item
export interface NewsItem {
  id: string;
  title: string;
  tag: string;
  date: string;
  summary: string;
  image: string;
}

// Policy Item
export interface Policy {
  id: string;
  title: string;
  region: string;
  publishDate: string;
  subsidyAmount: string;
  policyType: string;
  summary: string;
  isHot?: boolean;
}

// Park Item
export interface Park {
  id: string;
  name: string;
  region: string;
  district: string;
  workspacePrice: string;
  facilities: string[];
  preferentialPolicy: string;
  distance: number;
  image?: string;
}

// Service Provider
export interface ServiceProvider {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  cases: string;
  logo?: string;
}

// Success Case
export interface SuccessCase {
  id: string;
  avatar: string;
  name: string;
  project: string;
  park: string;
  support: string;
  achievement: string;
  date: string;
}

// Footer Link
export interface FooterLink {
  label: string;
  href: string;
}

// Footer Section
export interface FooterSection {
  title: string;
  links: FooterLink[];
}
