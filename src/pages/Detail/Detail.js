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

    return (
        <div style={{backgroundImage:'url(https://picsum.photos/1000)',minHeight:'100vh'}}>
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
                            <img className="col-span-1" src=""style={{ width: '100%', height: 300 }} alt="123" />
                            <div className="col-span-2 ml-5" style={{ marginTop: '25%' }}>
                                <p className="text-sm">Ngày chiếu: </p>
                                <p className="text-4xl leading-3">abc</p>
                            
                            </div>
                        </div>

                    </div>

                    <div className="col-span-4">
                        {/* <h1 style={{ marginLeft: '15%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                        <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf  style={{ color: '#78ed78', fontSize: 30 }} /></h1> */}
                        <div >
                            
                            <div className="col-span-4">
                                <div className="c100 p50 big">
                                    <span>50%</span>
                                    <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>

                            </div>
                                </div>
                            
                            </div>
                           

                        </div>
                        <br />

                    </div>
                </div>
       
        <div className="mt-5">
        <Tabs tabPosition={'left'}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
        </div>
        </CustomCard>
        
    </div>
    )
}
