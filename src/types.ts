export interface Faction {
  id: number
  slug: string // 'vagabond', 'marquise-de-cat', etc.
  name: string // 'Vagabond', 'Marquise de Cat', etc.
  icon: string // Letter representing the faction, e.g. 'V', 'M', etc.
  subtitle?: string // Short description of the faction
  description: string // HTML content describing the faction
  tips?: string // HTML content with tips for playing the faction
  setup: string // 'A', 'B', 'C', etc. Setup letter
  difficulty: number // 1-3, where 1 is easiest and 3 is hardest
  aggressivity: number // 1-3, where 1 is least aggressive and 3 is most aggressive
  hand: number // 1-3, propensity of the faction to  earn cards
  craft: number // 1-3, propensity of the faction to craft items
}

export interface LoiDeRootSection {
  id: string // '1', '2', '3', etc. 'A', 'B', 'C', etc.
  type?: string // 'rule', 'setup', 'gameplay', 'faction'
  faction?: string // Faction slug if applicable
  title: string
  content: string // HTML content
  subsections?: LoiDeRootSubsection[]
}
export interface LoiDeRootSubsection {
  id: string // '1.1', '1.2', '2.1', etc. 'A.1', 'B.2', 'C.1', etc.
  title: string
  content: string // HTML content
  topics?: LoiDeRootTopic[]
}
export interface LoiDeRootTopic {
  id: string // '1.1.1', '1.1.2', etc.
  title: string
  text: string // Text content
  items?: LoiDeRootItem[]
}
export interface LoiDeRootItem {
  id: string // '9.2.2.I', '9.2.2.II', etc.
  title: string
  text: string // Text content
  subitems?: LoiDeRootSubitem[]
}
export interface LoiDeRootSubitem {
  id: string // '9.2.9.I.a', '9.2.9.I.b', etc.
  title: string
  text: string // Text content
}
