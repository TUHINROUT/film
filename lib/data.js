export const services = [
  { id: 1, label: ["Film", "Production"], img: "/images/film_production.webp", icon: "reel" },
  { id: 2, label: ["Creative", "Development"], img: "/images/creative_devlopment.webp", icon: "clap" },
  { id: 3, label: ["Ad Films"], img: "/images/ad_films.webp", icon: "cam" },
  { id: 4, label: ["Music Videos"], img: "/images/music_video.webp", icon: "note" },
  { id: 5, label: ["Post-Production"], img: "/images/post_production.webp", icon: "reel" },
  { id: 6, label: ["Visual", "Storytelling"], img: "/images/visual_storytelling.webp", icon: "play" },
];

export const slides = [
  { bg: "/images/hero.webp", pos: "center 20%", tag: "Ideas | People | Stories", l: ["THE", "ART OF", "COMPETING"] },
  { bg: "/images/creative_devlopment.webp", pos: "center 35%", tag: "Creative Development", l: ["WHERE", "IDEAS", "TAKE FORM"] },
  { bg: "/images/ad_films.webp", pos: "center 40%", tag: "Ad Films", l: ["BRANDS", "THAT", "MOVE FAST"] },
  { bg: "/images/music_video.webp", pos: "center 40%", tag: "Music Videos", l: ["SOUND", "MEETS", "SPECTACLE"] },
  { bg: "/images/post_production.webp", pos: "center 40%", tag: "Post-Production", l: ["EVERY", "FRAME", "FINISHED"] },
  { bg: "/images/visual_storytelling.webp", pos: "center 40%", tag: "Visual Storytelling", l: ["STORIES", "SEEN", "DIFFERENT"] },
];

export const pages = {
  home: { title: "Home", href: "/" },
  about: { title: "About", href: "/about", text: "Arena is a creative studio crafting powerful stories, memorable characters and world-class visual experiences for a global audience." },
  services: { title: "Services", href: "/services", text: "Film production, creative development, ad films, music videos, post-production and visual storytelling under one roof." },
  work: { title: "Our Work", href: "/work", text: "A showreel of feature films, campaigns and music videos shot across studios and locations." },
  team: { title: "Team", href: "/team", text: "Directors, cinematographers, editors, colorists and producers who live for the moment the camera rolls." },
  contact: { title: "Contact", href: "/contact", text: "Have a story to tell? Write to hello@arenafilms.com and let's create something extraordinary." },
};
