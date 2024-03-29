import { TOKEN, USER_LOGIN } from "../../../util/settings/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../../types/QuanLyNguoiDungType";
import { SET_DANH_SACH_PHIM, SET_FILM_SAP_CHIEU,SET_FILM_DANG_CHIEU, SET_CHI_TIET_PHIM } from "../../types/QuanLyPhimType"


let user = {}; 
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN)); 
}
const stateDefault = {
userLogin: user,
thongTinNguoiDung: {}
}

export const QuanLyNguoiDungReducer = (state=stateDefault,action ) => {
    switch(action.type) {

         case DANG_NHAP_ACTION : {
            const {thongTinDangNhap} = action; 
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken); 

            return {...state, userLogin: thongTinDangNhap}
        }
        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung; 
            console.log( state.thongTinNguoiDung);
            return {...state}
        }

        

        default : return {...state}
    }
}