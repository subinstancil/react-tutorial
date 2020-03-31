import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leadres } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
          dishes: Dishes,
          comments: Comments,
          promotions: Promotions,
          leaders: Leadres  
        })
    );

    return store;
}