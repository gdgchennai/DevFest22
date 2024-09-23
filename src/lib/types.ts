export interface AgendaSession {
  name: string;
  session: string;
  time: string;
  imageUrl?: string;
  showImage?: boolean;
}

export interface Agenda {
  mainHall: AgendaSession[];
  amphiHall: AgendaSession[];
  ramanHall: AgendaSession[];
  miniAudi: AgendaSession[];
}

export interface Memory {
  title: string;
  image: string;
}

export interface CommunityPartners {
  image: string;
  link: string;
  title: string;
}

export interface NavMenu {
  name: string;
  href: string;
  active: boolean;
}

export type Announcement = string;

export interface Data {
  memories: Memory[];
  communityPartners: CommunityPartners[];
  announcements: String[];
  agendas: Agenda[];
}
