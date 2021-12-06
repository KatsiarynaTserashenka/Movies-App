import { Movie } from 'types/Movie';

export interface MovieState {
  movies: any[];
  loading: boolean;
  error: null | string;
  searchFilter: SearchFilter;
  movieFilter: MovieFilter;
  searchMovie: string;
}

export enum MovieFilter {
  RELEASE_DATE = 'release date',
  RATING = 'rating',
}

export enum SearchFilter {
  TITLE = 'TITLE',
  GENRE = 'GENRE',
}

export enum MoviesActionTypes {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
  SET_SEARCH_FILTER = 'SET_SEARCH_FILTER',
  SET_SEARCH_MOVIE = 'SET_SEARCH_MOVIE',
  SET_MOVIE_FILTER = 'SET_MOVIE_FILTER',
}

interface FetchMoviesAction {
  type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

interface FetchMoviesErrorAction {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

interface SetSearchFilterAction {
  type: MoviesActionTypes.SET_SEARCH_FILTER;
  payload: SearchFilter;
}

interface SetSearchStringAction {
  type: MoviesActionTypes.SET_SEARCH_MOVIE;
  payload: string;
}

interface SetMovieFilterAction {
  type: MoviesActionTypes.SET_MOVIE_FILTER;
  payload: MovieFilter;
}

export type MovieAction =
  | FetchMoviesAction
  | FetchMoviesSuccessAction
  | FetchMoviesErrorAction
  | SetSearchFilterAction
  | SetSearchStringAction
  | SetMovieFilterAction;
