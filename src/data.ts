export type Lang = "pt" | "en";
export type Localized = string | { pt: string; en: string };

export interface ProjectImage { src: string; alt: Localized }
export interface Project {
  id: string; title: string; year?: string; kinds: string[]; hue: number; glyph: string;
  category: "featured" | "other"; priority?: number; problem: Localized; solution: Localized; status: Localized; architecture?: Localized;
  challenges?: Localized[]; cover?: string; badge: Localized; summary: Localized; details: Record<Lang, string[]>;
  stack: string[]; images: ProjectImage[]; repo?: string; demo?: string;
}
export interface PortfolioData {
  config: { siteUrl: string; email: string; github: string; linkedin: string; whatsapp: string; cv: string; cvEn: string; formEndpoint: string };
  ui: Record<Lang, Record<string, string>>;
  typed: Record<Lang, string[]>;
  stats: { v: string; u: Localized; l: Localized }[];
  chip: Localized;
  about: { paragraphs: Record<Lang, string[]>; facts: { label: Localized; value: Localized }[]; interests: Record<Lang, string[]> };
  experience: { company: string; roles: { role: Localized; period: Localized }[]; highlights: Record<Lang, string[]>; tags: string[] }[];
  layers: Localized[];
  projects: Project[];
  skills: { title: Localized; items: { n: Localized; core?: boolean }[] }[];
  education: { title: Localized; place: Localized; period: Localized }[];
  certs: { title: Localized; meta: Localized; url: string }[];
}

// O conteúdo editorial continua em um arquivo separado para facilitar manutenção.
import raw from "./portfolioData";
export const D = raw as PortfolioData;
