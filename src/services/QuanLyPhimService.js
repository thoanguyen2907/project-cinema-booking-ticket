import { baseService } from "./baseService";

import React, { Component } from 'react'
import { GROUPID } from "../util/settings/config";

export default class QuanLyPhimService extends baseService {
    constructor(){
        super(); 
    }
    layDanhSachBanner = () => {
      return  this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
    layDanhSachPhim = () => {
      return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
  }

}

export const quanLyPhimService = new QuanLyPhimService(); 
