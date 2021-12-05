import {
  MovieAction,
  MoviesActionTypes,
  MovieState,
  MovieFilter,
  SearchFilter,
} from 'store/types/todo';

const InitialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
  searchFilter: SearchFilter.TITLE,
  movieFilter: MovieFilter.RATING,
  searchString: '',
};

export const movieReducer = (
  state = InitialState,
  action: MovieAction
): MovieState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return {
        ...state,
        loading: true,
        error: null,
        movies: [],
      };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: [],
      };
    case MoviesActionTypes.SET_SEARCH_FILTER: {
      return {
        ...state,
        searchFilter: action.payload,
      };
    }
    case MoviesActionTypes.SET_MOVIE_FILTER: {
      return {
        ...state,
        movieFilter: action.payload,
      };
    }
    case MoviesActionTypes.SET_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload,
      };
    }
    default:
      return state;
  }
};
