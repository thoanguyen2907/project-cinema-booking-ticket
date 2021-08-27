import { baseService } from "./baseService";


export default class QuanLyDatVeService extends baseService {
    
    layChiTietDatVe = (maLichChieu) => {
      return  this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    
}

export const quanLyDatVeService = new QuanLyDatVeService(); 