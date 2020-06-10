import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {photoReducer} from './reducers/photoReducer';

export const ConfigureStore = () => {
  const store = createStore(combineReducers({
    photos: photoReducer
  }), applyMiddleware(thunk));
  return store
};
