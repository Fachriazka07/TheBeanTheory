// ──── Sanity Image Reference ────

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

// ──── Product ────

export type RoastLevel = 'light' | 'medium' | 'medium-dark' | 'dark';
export type ProcessMethod = 'washed' | 'natural' | 'honey' | 'anaerobic';

export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImage;
  origin: string;
  roastLevel: RoastLevel;
  process: ProcessMethod;
  notes: string[];
  price: number;
  isReady: boolean;
  waLink: string;
}

// ──── Brewing Guide ────

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface BrewingGuide {
  _id: string;
  methodName: string;
  icon: SanityImage;
  difficulty: Difficulty;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instructions: any[]; // Portable Text blocks
  videoUrl?: string;
}

// ──── Location ────

export interface Coordinates {
  _type: 'geopoint';
  lat: number;
  lng: number;
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
}

export interface Location {
  _id: string;
  branchName: string;
  address: string;
  coordinates: Coordinates;
  openingHours: OpeningHours[];
}

// ──── API Response Envelope ────

export interface ApiResponse<T> {
  data: T;
  meta?: {
    page: number;
    total: number;
  };
  error?: {
    code: string;
    message: string;
  };
}

// ──── Navigation ────

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Beans', href: '/products' },
  { label: 'Brew Guide', href: '/brewing-guide' },
  { label: 'Locations', href: '/locations' },
];
