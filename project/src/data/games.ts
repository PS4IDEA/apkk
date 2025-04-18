import { Game } from '../types';

export const games: Game[] = [
  {
    id: 1,
    title: "Cyber Horizon 2077",
    description: "Experience the future in this open-world RPG where your choices shape the narrative. Explore a vast metropolis filled with cybernetic enhancements, corporate conspiracies, and moral dilemmas.",
    imageUrl: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-1",
    size: "65.2 GB",
    genre: ["RPG", "Open World", "Action"],
    releaseDate: "2023-11-15",
    developer: "NightFall Studios",
    featured: true,
    rating: 4.8
  },
  {
    id: 2,
    title: "Eternal Legends",
    description: "Embark on an epic journey through a mythical world where ancient powers awaken. Master the elements, forge powerful alliances, and defeat the encroaching darkness threatening the realm.",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-2",
    size: "43.7 GB",
    genre: ["MMORPG", "Fantasy", "Adventure"],
    releaseDate: "2023-08-22",
    developer: "Mythic Entertainment",
    featured: true,
    rating: 4.5
  },
  {
    id: 3,
    title: "Speed Demons Racing",
    description: "Push the limits in the most realistic racing simulator ever created. Experience true-to-life physics, weather effects, and a massive collection of licensed vehicles on meticulously recreated tracks.",
    imageUrl: "https://images.pexels.com/photos/12912120/pexels-photo-12912120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-3",
    size: "28.3 GB",
    genre: ["Racing", "Simulation", "Sports"],
    releaseDate: "2024-01-30",
    developer: "Velocity Games",
    featured: false,
    rating: 4.3
  },
  {
    id: 4,
    title: "Galaxy Commander",
    description: "Lead your fleet through the cosmos in this strategic space adventure. Establish colonies, research technologies, and engage in tactical combat while navigating complex diplomatic relations with alien civilizations.",
    imageUrl: "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-4",
    size: "18.5 GB",
    genre: ["Strategy", "Simulation", "Sci-Fi"],
    releaseDate: "2023-05-12",
    developer: "Stellar Solutions",
    featured: true,
    rating: 4.6
  },
  {
    id: 5,
    title: "Dungeon Delvers",
    description: "Descend into procedurally generated dungeons filled with monsters, traps, and treasures. Form a party with unique heroes, each with their own abilities and weaknesses, in this challenging roguelike adventure.",
    imageUrl: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-5",
    size: "12.1 GB",
    genre: ["Roguelike", "Strategy", "Fantasy"],
    releaseDate: "2024-02-18",
    developer: "Crypt Games",
    featured: false,
    rating: 4.2
  },
  {
    id: 6,
    title: "Battlefield Heroes",
    description: "Experience intense modern warfare across massive multiplayer battlegrounds. Deploy with your squad, command vehicles, and alter the environment in this next-generation first-person shooter.",
    imageUrl: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-6",
    size: "52.8 GB",
    genre: ["FPS", "Multiplayer", "Action"],
    releaseDate: "2023-09-05",
    developer: "Warfront Studios",
    featured: false,
    rating: 4.4
  },
  {
    id: 7,
    title: "Crafting Explorers",
    description: "Build, explore, and survive in a vast voxel world limited only by your imagination. Create impressive structures, automate resource collection, and embark on adventures alone or with friends.",
    imageUrl: "https://images.pexels.com/photos/7915589/pexels-photo-7915589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-7",
    size: "8.3 GB",
    genre: ["Sandbox", "Survival", "Multiplayer"],
    releaseDate: "2023-03-24",
    developer: "Block Innovation",
    featured: true,
    rating: 4.7
  },
  {
    id: 8,
    title: "Football Manager Pro",
    description: "Take control of your favorite team in the most comprehensive football management simulation. Handle transfers, tactics, training, and match day decisions as you build a dynasty to dominate the sport.",
    imageUrl: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    downloadUrl: "#download-link-8",
    size: "22.6 GB",
    genre: ["Sports", "Simulation", "Strategy"],
    releaseDate: "2023-10-08",
    developer: "Sideline Interactive",
    featured: false,
    rating: 4.5
  }
];

export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  
  games.forEach(game => {
    game.genre.forEach(genre => {
      genreSet.add(genre);
    });
  });
  
  return Array.from(genreSet).sort();
};