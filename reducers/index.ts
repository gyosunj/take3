import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MakeStore } from 'next-redux-wrapper';

import { colorList } from './color-list-reducer';

export const reducers = combineReducers({
  colorList,
});

export const initStore: MakeStore = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
