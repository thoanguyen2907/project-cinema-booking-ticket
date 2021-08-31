import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";


export default class QuanLyDatVeService extends baseService {
    
    layChiTietDatVe = (maLichChieu) => {
      return  this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
      return this.post('api/QuanLyDatVe/DatVe', thongTinDatVe)
    }
}

export const quanLyDatVeService = new QuanLyDatVeService(); 