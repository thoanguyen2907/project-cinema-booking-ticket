import { baseService } from "./baseService";

import React, { Component } from 'react'
import { GROUPID } from "../util/settings/config";

export default class QuanLyRapService extends baseService {
    constructor(){
        super(); 
    }
    layDanhSachRapChieuPhim = () => {
      return  this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
      return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyRapService = new QuanLyRapService(); 