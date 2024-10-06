export interface Sponsor {
    name: string;
    image: string;
    website: string;
  }
  
  export const sponsors: Sponsor[] = [
    {
      name: "Google for Developers",
      image: "https://static.gdgchennai.in/sponsors/sp1.webp",
      website: "https://developers.google.com/"
    },
    {
        image: 'https://static.gdgchennai.in/sponsors/sp2.webp',
	name: 'Rezoomex',
	website: 'https://rezoomex.com/'
    },
    {
        image: 'https://static.gdgchennai.in/sponsors/sp3.webp',
	name: 'Stitchflow',
	website: 'https://www.stitchflow.io/'
    }
    // Add more sponsors here
  ];
