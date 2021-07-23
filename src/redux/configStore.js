import {combineReducers, createStore, applyMiddleware} from 'redux'; 
import {CarouselReducer} from './reducers/CarouselReducer/CarouselReducer'; 

import {QuanLyRapReducer} from './reducers/QuanLyRapChieuReducer/QuanLyRapChieuReducer'; 

import thunk from 'redux-thunk'; 

const rootReducer = combineReducers({
    CarouselReducer, 
    QuanLyRapReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk)); 