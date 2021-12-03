import { Dispatch } from 'react';
import { MoviesActionTypes, MovieAction } from 'store/types/todo';
import axios from 'axios';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
      const response = await axios.get(
        'https://reactjs-cdp.herokuapp.com/movies?limit=3000'
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
