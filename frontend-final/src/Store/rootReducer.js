import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  user: usersReducer,
  products: productsReducer
});

export default rootReducer;