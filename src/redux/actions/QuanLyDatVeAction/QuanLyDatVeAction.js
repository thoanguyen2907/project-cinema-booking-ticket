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

            console.log(result);
            
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
              dispatch({
                type: DISPLAY_LOADING
            })
            const result = await quanLyDatVeService.datVe(thongTinDatVe) ;
            
            if(result.data.statusCode === 200) {
                console.log(result.data.content)
             
            }
              dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
              dispatch({
                type: DAT_VE_HOAN_TAT
            })
              dispatch({
                type: HIDE_LOADING
            });
              dispatch({
                type:CHUYEN_TAB
            });
        
           
        } catch(errors) {
            console.log("errors", errors?.response.data)
        }
    }
}

export const datGheAction = (ghe,maLichChieu) => {

    return async (dispatch,getState) => {

            //  thông tin ghế lên reducer
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe
            });

        //Call api về backend 
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
        
        let taiKhoan = JSON.parse(localStorage.getItem('USER_LOGIN')).taiKhoan;

        console.log('danhSachGheDangDat',danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu',maLichChieu);
        //Biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

       
        try {
             //Call api signalR
             console.log({
                taiKhoan,danhSachGheDangDat,maLichChieu
             })
        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);

        } catch (error) {
            console.log(error)
        }


    }

}

