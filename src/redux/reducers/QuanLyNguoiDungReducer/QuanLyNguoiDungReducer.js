import { SET_DANH_SACH_PHIM, SET_FILM_SAP_CHIEU,SET_FILM_DANG_CHIEU, SET_CHI_TIET_PHIM } from "../../types/QuanLyPhimType"



const stateDefault = {
userLLogin: {}
}

export const QuanLyNguoiDungReducer = (state=stateDefault,action ) => {
    switch(action.type) {

        case SET_DANH_SACH_PHIM : {
            state.arrFilm = action.arrFilm;
       
            state.arrFilmDefault = state.arrFilm;
            return {...state}
        }
        

        default : return {...state}
    }
}