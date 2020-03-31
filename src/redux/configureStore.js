import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leadres } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
          dishes: Dishes,
          comments: Comments,
          promotions: Promotions,
          leaders: Leadres  
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}