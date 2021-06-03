import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import currencyReducer from './reducers/currencyReducer';
import marketDataReducer from './reducers/marketDataReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  );

const store = createStore(combineReducers(
    {
        currency: currencyReducer,
        marketData: marketDataReducer,
    }
), composedEnhancer);

export default store