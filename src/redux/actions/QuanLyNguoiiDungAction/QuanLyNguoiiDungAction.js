import Axios from 'axios'
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useHistory } from "react-router-dom";
import { SET_THONG_TIN_NGUOI_DUNG } from '../../types/QuanLyNguoiDungType';
import { history } from '../../../App';

export const  dangNhapAction= (thongTinDangNhap) => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap) ;
            
            if(result.data.statusCode === 200) {
                dispatch({
                    type: "DANG_NHAP_ACTION", 
                    thongTinDangNhap: result.data.content
                });
                history.goBack(); 
          
            }

           
        } catch(errors) {
            console.log("errors", errors.response.data)
        }
    }
}

export const  layThongTinNguoiDungAction= () => {

    return async (dispatch) => {
  

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung() ;
            console.log(result);
            if(result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG, 
                    thongTinNguoiDung: result.data.content
                });
          
            }
            console.log("SET_THONG_TIN_NGUOI_DUNG", result.data.content)
           
        } catch(errors) {
            console.log("errors", errors.response.data)
        }
    }
}
