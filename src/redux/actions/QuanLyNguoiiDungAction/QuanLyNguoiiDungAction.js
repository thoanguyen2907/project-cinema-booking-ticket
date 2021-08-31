import Axios from 'axios'
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useHistory } from "react-router-dom";

export const  dangNhapAction= (thongTinDangNhap) => {

    return async (dispatch) => {
  

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap) ;
            console.log("result", result)
            if(result.data.statusCode === 200) {
                dispatch({
                    type: "DANG_NHAP_ACTION", 
                    thongTinDangNhap: result.data.content
                });
          
            }
           
        } catch(errors) {
            console.log("errors", errors.response.data)
        }
    }
}
