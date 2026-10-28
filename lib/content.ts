

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  label: string;
  year: string;
  image: string;
  theme: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "forma",
    number: "01",
    title: "Volt Store",
    category: "E-commerce · Store",
    label: "Ecommerce / Store",
    year: "2025",
    image: "/assets/ecom.png",
    theme: "project-lilac",
    url: "https://testecommerce-final.vercel.app/",
  },
  {
    slug: "northstar",
    number: "02",
    title: "Northstar Finance",
    category: "Fintech · Product design",
    label: "CLARITY IN MOTION",
    year: "2025",
    image: "/assets/mortgage.png",
    theme: "project-blue",
    url: "https://mortgage-three-beta.vercel.app/",
  },
  {
    slug: "still",
    number: "03",
    title: "ThepreferredMortgage",
    category: "Mortgage · Development",
    label: "LESS, BUT BETTER",
    year: "2024",
    image: "/assets/home.png",
    theme: "project-sand",
    url: "https://estate-ashy-eight.vercel.app/",
  },
  {
    slug: "orbit",
    number: "04",
    title: "Velora Auto Rental",
    category: "Web experience · Motion",
    label: "A NEW PERSPECTIVE",
    year: "2024",
    image: "/assets/car.png",
    theme: "project-purple",
    url: "https://carrental-iota-ten.vercel.app/ ",
  },
  {
    slug: "hospitality",
    number: "05",
    title: "Velora",
    category: "Hospitality · Web development",
    label: "A BETTER WAY TO STAY",
    year: "2025",
    image: "/assets/hotels.png",
    theme: "project-sand",
    url: "https://hotel-mu-rosy.vercel.app/",
  },
  {
    slug: "ecocycle",
    number: "06",
    title: "Greenloop",
    category: "Sustainability · Development",
    label: "DESIGNED FOR TOMORROW",
    year: "2025",
    image: "/assets/waste.png",
    theme: "project-blue",
    url: "https://wastedisposal-iota.vercel.app/",
  },
   {
    slug: "Sports",
    number: "07",
    title: "Betisports",
    category: "Sports . Streaming",
    label: "BEST IN FOOTBALL",
    year: "2022",
    image: "/assets/betisports.png",
    theme: "project-sports",
    url: "https://betisports.com/",
  },
];

export type Post={slug:string;title:string;category:string;date:string;readTime:string;excerpt:string;image:string;body:string[];};
export const posts:Post[]=[
 {slug:"designing-for-the-next-web",title:"Designing for the next version of the web",category:"Perspective",date:"Oct 14, 2025",readTime:"5 min read",excerpt:"The most memorable websites do more than look good. They create a feeling, then make the next step obvious.",image:"https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",body:["The web keeps changing, but the fundamentals of a useful digital experience remain surprisingly stable: clarity, speed, accessibility and a strong sense of purpose. New tools should make those fundamentals stronger, not distract from them.","Motion and 3D can give an interface a sense of depth. Used carefully, they guide attention, explain relationships and create moments worth remembering. Used everywhere, they compete with the content and make a site harder to use.","Start with the message and the user's goal. Build a clear hierarchy, test it on real devices, and add motion only when it improves understanding. The next version of the web will belong to experiences that balance ambition with restraint."]},
 {slug:"why-performance-is-design",title:"Why performance is part of good design",category:"Development",date:"Sep 28, 2025",readTime:"4 min read",excerpt:"A beautiful interface only works when it feels immediate. Performance is a feature your visitors can feel.",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",body:["Performance is not an invisible engineering detail. It shapes how a brand feels before a visitor reads a headline or clicks a button. A slow experience can make even the most considered design feel unreliable.","We treat performance as a design constraint from the beginning. That means optimizing images, loading only what the page needs, respecting reduced-motion preferences and measuring how the experience behaves on ordinary connections.","The goal is not a score for its own sake. The goal is a site that responds quickly, communicates clearly and remains enjoyable across devices. Speed is part of the experience, so it belongs in the brief."]},
 {slug:"building-brands-with-digital-detail",title:"Building brands through digital detail",category:"Strategy",date:"Sep 10, 2025",readTime:"6 min read",excerpt:"Typography, spacing, transitions and tone add up to the way people remember a digital brand.",image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=85",body:["A brand is not only a logo or a color palette. Online, it is the sum of many small interactions: the rhythm of a page, the tone of a confirmation message, the confidence of a transition and the care taken with details.","Consistency doesn't mean making every page identical. It means using a shared set of principles so each page feels like part of the same story. Typography, spacing, imagery and motion should reinforce the same character.","When those details work together, the experience becomes recognizable without needing to repeat the logo. That is the power of a thoughtful digital system."]},
 {slug:"from-brief-to-launch",title:"From first brief to a confident launch",category:"Process",date:"Aug 21, 2025",readTime:"5 min read",excerpt:"A good project process turns big ambitions into small, testable decisions that build momentum.",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",body:["The best digital projects begin with alignment, not software. Before the first screen, we need to understand the audience, the business goal and what success should look like.","We move from discovery into structure, design, implementation and testing. At each stage, we make the work visible, invite useful feedback and keep decisions tied to the original goal.","Launch is a milestone, not the end of the relationship. Measurement and iteration help a digital product become more useful over time. A clear process makes that continuous improvement possible."]}
];