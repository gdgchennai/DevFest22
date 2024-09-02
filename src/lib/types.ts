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

export interface Data {
  memories: Memory[];
  communityPartners: CommunityPartners[];
}
