import Axios from 'axios'
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { quanLyPhimService } from '../../../services/QuanLyPhimService';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import { useHistory } from "react-router-dom";
import { quanLyDatVeService } from '../../../services/QuanLyDatVeService';
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from '../../types/QuanLyDatVeTypes';
import { ThongTinDatVe } from '../../../_core/models/ThongTinDatVe';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../types/LoadingTypes';
import { connection } from "../../../index";

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
            await dispatch({
                type: DISPLAY_LOADING
            })
            const result = await quanLyDatVeService.datVe(thongTinDatVe) ;
            
            if(result.data.statusCode === 200) {
                console.log(result.data.content)
             
            }
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
            await dispatch({
                type: DAT_VE_HOAN_TAT
            })
            await dispatch({
                type: HIDE_LOADING
            });
            await dispatch({
                type:CHUYEN_TAB
            });
        
           
        } catch(errors) {
            console.log("errors", errors?.response.data)
        }
    }
}

export const datGheAction = (ghe,maLichChieu) => {

    return async (dispatch,getState) => {

        //Đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        });

        //Call api về backend 
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

        console.log('danhSachGheDangDat',danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu',maLichChieu);
        //Biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

        //Call api signalR
        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);




    }

}

