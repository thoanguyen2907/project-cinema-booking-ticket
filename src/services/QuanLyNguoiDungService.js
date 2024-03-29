import { baseService } from "./baseService";


export default class QuanLyNguoiDungService extends baseService {
    
    dangNhap = (thongTinDangNhap) => {
      return  this.post("api/QuanLyNguoiDung/DangNhap", thongTinDangNhap)
    }
    dangKy = (thongTinDangKy) => {
      return  this.post("api/QuanLyNguoiDung/DangKy", thongTinDangKy)
    }
    layThongTinNguoiDung = () => {
      return  this.post("api/QuanLyNguoiDung/ThongTinTaiKhoan")
    }
    
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService(); 