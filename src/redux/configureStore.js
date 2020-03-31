import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leadres } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { IntitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
          dishes: Dishes,
          comments: Comments,
          promotions: Promotions,
          leaders: Leadres,
          ...createForms({
            feedback: IntitialFeedback
          })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}