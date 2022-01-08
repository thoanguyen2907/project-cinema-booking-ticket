import React, { useState, useEffect } from 'react';

import { Tabs, Radio, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

export default function HomeMenu(props) {
    const [tabPosition, setTabPosition] = useState('left');

     const changeTabPosition = e => {
        setTabPosition(e.target.value);
      };

     

      const renderHeThongRap = () => {
        return props.heThongRapChieu?.map((heThongRap, index) => {
          return  <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" alt="logo"/>} key={index}>
          <Tabs tabPosition={tabPosition}>
              {heThongRap.lstCumRap?.map((cumRap, index) => {
                  return <TabPane tab={
                      <div style={{ width: '300px', display: 'flex' }} >
                          <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" alt = "hinhAnhPhim"/> <br />
                          <div className="text-left ml-2">
                              {cumRap.tenCumRap}
                              <p className="text-red-200">Detail</p>
                          </div>
                      </div>
                  }
                      key={index}>
                      {/*Load phim tương ứng */}
                      {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                          return <div key={index}>
                              <div className="my-5" >
                                  <div style={{ display: 'flex' }}>
                                      <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                      <div className="ml-2">
                                          <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
                                          <p>{cumRap.diaChi}</p>
                                          <div className="grid grid-cols-6 gap-6">
                                              {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                  return <NavLink className="text-xl text-green-400" to= {`checkout/${lichChieu.maLichChieu}`} key={index}>
                                                      {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                  </NavLink>
                                              })}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <hr />
                          </div>
                      })}


                  </TabPane>

              })}
          </Tabs>
      </TabPane>
        })
      }
    return (
      
   
        <div>
             
        <Tabs tabPosition={tabPosition}>
         {renderHeThongRap()}
        </Tabs>
        </div>
    )
}
