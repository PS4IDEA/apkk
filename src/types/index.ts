export interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  size: string;
  genre: string[];
  releaseDate: string;
  developer: string;
  featured: boolean;
  rating: number;
}