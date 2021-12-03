import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MovieActionCreators from '../store/actionCreators/movie';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(MovieActionCreators, dispatch);
};
