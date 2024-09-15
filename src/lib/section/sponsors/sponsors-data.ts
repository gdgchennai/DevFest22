export interface Sponsor {
    name: string;
    image: string;
    website: string;
  }
  
  export const sponsors: Sponsor[] = [
    {
      name: "Google Developers",
      image: "/google-devs.svg",
      website: "https://developers.google.com/"
    },
    {
        image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700844794/devfest/rezoomex_v2iv8t.webp',
		name: 'Rezoomex',
		website: 'https://rezoomex.com/'
    }
    // Add more sponsors here
  ];
