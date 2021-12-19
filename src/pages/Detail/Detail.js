import React, { useEffect, useState } from 'react';
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css';
import '../../assets/styles/circle.css'
import { Tabs, Radio, Space, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment'; //npm i moment
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { SET_CHI_TIET_PHIM } from '../../redux/types/QuanLyPhimType';
import { layDanhChiTietPhimAction } from '../../redux/actions/QuanLyRapAction/QuanLyRapAction';
const { TabPane } = Tabs;

export default function Detail(props) {
    const [tabPosition, setTabPosition] = useState('left');
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    const dispatch = useDispatch()
    useEffect(() => {
        let {id} = props.match.params;
        console.log("id", id);
        dispatch(layDanhChiTietPhimAction(id))
    }, []);

    console.log({filmDetail});

    return (
        <div style={{backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', minHeight: '100vh' }}>
        <CustomCard
            style={{paddingTop:150,minHeight:'100vh'}}
            effectColor="#fff" // required
            color="#fff" // default color is white
            blur={20} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
        >
             <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img className="col-span-1" src={filmDetail.hinhAnh} style={{ width: '100%', height: 300 }} alt="123" />
                            <div className="col-span-2 ml-5" style={{ marginTop: '18%' }}>
                                <p className="text-sm">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                <p className="text-4xl leading-3">{filmDetail.tenPhim}</p>
                                <p>{filmDetail.moTa}</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-span-4">
                        <h1 style={{ marginLeft: '15%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                        <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span className="text-white">

                                {filmDetail.danhGia * 10}%
                            </span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>

                            </div>

                        </div>
                        <br />

                    </div>
                </div>
                <div className="mt-10 ml-72 container bg-white px-5 py-5 w-2/3">
                <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Lịch chiếu" key="1">
    <div className="mt-20 container bg-white mx-auto">
        <Tabs tabPosition={'left'}>
            {filmDetail.heThongRapChieu?.map((htr, index) => {
                return   <TabPane tab={<div>
                     <img src={htr.logo} width="50" className="rounded-full" alt={htr.tenHeThongRap}/> {htr.tenHeThongRap}
                     </div>} key={index}>
                    {htr.cumRapChieu?.map((cumRap, index) => {
                        return <div className="mt-5" key={index}>
                            <div className="flex flex-row">
                                <img style={{width:60, height:60}} src={cumRap.hinhAnh} alt={cumRap.tenCumRap} />
                                <div className="">
                                <p className="ml-3" style={{fontSize:20, fontWeight:'bold', lineHeight:1}}> {cumRap.tenCumRap}</p>
                                <p className="ml-3 text-gray-300" style={{marginTop: 0}}> {cumRap.tenCumRap}</p>
                                </div>
                                
                            </div>
                            <div className="thong-tin-lich-chieu grid grid-cols-4">
                                {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu, index) => {
                                    console.log(lichChieu.maLichChieu);
                                    return  <NavLink to ={`checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm: A')}
                                    </NavLink>
                                })}
                                  
                            </div>
                             
                        </div>
                    })}
              </TabPane>
            })}
         
        </Tabs>
        </div>
    </TabPane>
    <TabPane tab="Thông tin" key="2">
    Thông tin
    </TabPane>
    <TabPane tab="Đánh giá" key="3">
    Đánh giá
    </TabPane>
  </Tabs>
  </div>
       
       
        </CustomCard>
        
    </div>
    )
}
