import { Dispatch } from 'react';
import {
  MoviesActionTypes,
  MovieAction,
  MovieFilter,
  SearchFilter,
} from 'store/types/todo';
import axios from 'axios';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const response = await axios.get(
        'https://reactjs-cdp.herokuapp.com/movies'
      );
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'An error occurred while downloading movies',
      });
    }
  };
};

export const setSearchFilter = (filter: SearchFilter): MovieAction => ({
  type: MoviesActionTypes.SET_SEARCH_FILTER,
  payload: filter,
});

export const setSearchString = (word: string): MovieAction => ({
  type: MoviesActionTypes.SET_SEARCH_STRING,
  payload: word,
});

export const setMovieFilter = (filter: MovieFilter): MovieAction => ({
  type: MoviesActionTypes.SET_MOVIE_FILTER,
  payload: filter,
});
