import { baseService } from "./baseService";


export default class QuanLyNguoiDungService extends baseService {
    
    dangNhap = (thongTinDangNhap) => {
      return  this.post("api/QuanLyNguoiDung/DangNhap", thongTinDangNhap)
    }
    
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService(); 