import Axios from 'axios'
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useHistory } from "react-router-dom";
import { quanLyDatVeService } from '../../../services/QuanLyDatVeService';
import { SET_CHI_TIET_PHONG_VE } from '../../types/QuanLyDatVeTypes';
import { ThongTinDatVe } from '../../../_core/models/ThongTinDatVe';

export const  layChiTietPhongVeAction= (maLichChieu) => {

    return async (dispatch) => {

        try {
            const result = await quanLyDatVeService.layChiTietDatVe(maLichChieu) ;
            
            if(result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE, 
                    chiTietPhongVe: result.data.content
                });
             
            }
           
        } catch(errors) {
            console.log("errors", errors?.response.data)
        }
    }
}

export const  datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {

    return async (dispatch) => {
        console.log({thongTinDatVe});

        try {
            const result = await quanLyDatVeService.datVe(thongTinDatVe) ;
            
            if(result.data.statusCode === 200) {
                console.log(result.data.content)
             
            }
           
        } catch(errors) {
            console.log("errors", errors?.response.data)
        }
    }
}

