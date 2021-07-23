import Axios from 'axios'
import { quanLyRapService } from '../../../services/QuanLyRapService';
export const  layDanhSachHeThongRapAction= () => {

    return async (dispatch) => {
        try {
            const result = await quanLyRapService.layDanhSachRapChieuPhim();
            console.log("result",result)
            if(result.status === 200) {
                dispatch({
                    types: "LAY_DANH_SACH_RAP_CHIEU_PHIM", 
                    heThongRapChieu: result.data.content
                })
            }
            
        } catch(errors) {
            console.log("errors", errors)
        }
    }
}
