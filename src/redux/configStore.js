import {combineReducers, createStore, applyMiddleware} from 'redux'; 
import {CarouselReducer} from './reducers/CarouselReducer/CarouselReducer'; 

import {QuanLyRapReducer} from './reducers/QuanLyRapChieuReducer/QuanLyRapChieuReducer'; 

import {QuanLyPhimReducer} from './reducers/QuanLyPhimReducer/QuanLyPhimReducer'; 
import {QuanLyNguoiDungReducer} from './reducers/QuanLyNguoiDungReducer/QuanLyNguoiDungReducer'; 
import {QuanLyDatVeReducer} from './reducers/QuanLyDatVeReducer/QuanLyDatVeReducer'; 
import thunk from 'redux-thunk'; 

const rootReducer = combineReducers({
    CarouselReducer, 
    QuanLyRapReducer, 
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk)); 