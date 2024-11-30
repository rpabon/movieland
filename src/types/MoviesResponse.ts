import { MovieType } from './MovieType';

export interface MoviesResponse {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
