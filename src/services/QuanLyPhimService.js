import { baseService } from "./baseService";

import React, { Component } from 'react'

export default class QuanLyPhimService extends baseService {
    constructor(){
        super(); 
    }
    layDanhSachBanner = () => {
      return  this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
}

export const quanLyPhimService = new QuanLyPhimService(); 
