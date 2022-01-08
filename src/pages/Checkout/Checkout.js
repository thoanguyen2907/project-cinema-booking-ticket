import React, { Fragment, useEffect } from 'react';
import { Tabs } from 'antd';
import style from './Checkout.module.css';
import './Checkout.css'; 
import { CheckOutlined, CloseOutlined, UserOutlined, SmileOutlined , HomeOutlined} from '@ant-design/icons'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { datGheAction, datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction';
import { DAT_VE } from '../../redux/types/QuanLyDatVeTypes';
import _ from 'lodash';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import moment from 'moment';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiiDungAction/QuanLyNguoiiDungAction';
import { connection } from '../../index';
import { useHistory } from 'react-router';
import { history } from '../../App';
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { NavLink } from 'react-router-dom';

function Checkout(props) {
     const {chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat} =  useSelector(state => state.QuanLyDatVeReducer);

     // kiểm tra ng dùng đăng nhập
     const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer); 
     
    const dispatch = useDispatch();
    
    useEffect(() => {
        const maLichChieu = props.match.params.id; 
        
       dispatch(layChiTietPhongVeAction(maLichChieu));

    //Có 1 client nào thực hiện việc đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
    connection.on('datVeThanhCong', () =>  {
        dispatch(layChiTietPhongVeAction(maLichChieu));
    });

     //Vừa vào trang load tất cả ghế của các người khác đang đặt
     connection.invoke('loadDanhSachGhe',props.match.params.id);

     //Load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)
     connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
        
        //Bước 1: Loại mình ra khỏi danh sách 
        dsGheKhachDat = dsGheKhachDat.filter(item => item.taiKhoan !== userLogin.taiKhoan);
        //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung 

        let arrGheKhachDat = dsGheKhachDat.reduce((result,item,index)=>{
            let arrGhe = JSON.parse(item.danhSachGhe);

            return [...result,...arrGhe];
        },[]);

        //Đưa dữ liệu ghế khách đặt cập nhật redux
        arrGheKhachDat = _.uniqBy(arrGheKhachDat,'maGhe');

        //Đưa dữ liệu ghế khách đặt về redux
        dispatch({
            type:'DAT_GHE',
            arrGheKhachDat
        })      
     })

     //Cài đặt sự kiện khi reload trang
     window.addEventListener("beforeunload", clearGhe);

     return () => {
         clearGhe();
         window.removeEventListener('beforeunload',clearGhe);
     }

    }, []);


    const clearGhe = function(event) {
        
        connection.invoke('huyDat',userLogin.taiKhoan,props.match.params.id);  
    }
    const {thongTinPhim, danhSachGhe} = chiTietPhongVe; 

    const renderSeats = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
           
             //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
             let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
          
            let classGheDaDuocDat = ''; 
            if(userLogin.taiKhoan === ghe.taiKhoanNguoiDat){
                classGheDaDuocDat = 'gheDaDuocDat'
            } 
             //Kiểm tra từng render xem có phải ghế khách đặt hay không
             let classGheKhachDat = '';
             let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
             if(indexGheKD !== -1){
                 classGheKhachDat = 'gheKhachDat';
             }

             if (indexGheDD != -1) {
                 classGheDaDat = 'gheDangDat';
             }
            
            return <Fragment key = {index}> 
            <button onClick = {() => {
                   const action = datGheAction(ghe,props.match.params.id);
                   dispatch(action);
            }}
            disabled={ghe.daDat || classGheKhachDat !==''} className={`ghe ${classGheVip} ${classGheDaDuocDat} ${classGheKhachDat} ${classGheDangDat} ${classGheDaDat} text-center`} key = {index}>
      
      {ghe.daDat  ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : classGheKhachDat !=='' ? <SmileOutlined  style={{ marginBottom: 7.5, fontWeight: 'bold' }} />  :  ghe.stt}
                </button>
                 {(index + 1) % 16 === 0 ? <br /> : ''}
                 </Fragment>
              
        })
    }

    return (
        <div className=" min-h-screen mt-5" >
        <div className="grid grid-cols-12">
            <div className="col-span-9">
                <div className="flex flex-col items-center mt-5">

                    <div className="bg-black " style={{ width: '80%', height: 15 }}>
                    </div>
                    <div className={`${style['trapezoid']} text-center`}>
                        <h3 className="mt-3 text-black">Monitor</h3>
                    </div>
                    <div>
                        {renderSeats()}
                    </div>
                </div>
              
                <div className="mt-5 flex justify-center">
                    <table className=" divide-y divide-gray-200 w-2/3">
                        <thead className="bg-gray-50 p-5">
                            <tr>
                                <th>Ghế chưa đặt</th>
                                <th>Ghế đang đặt</th>
                                <th>Ghế vip</th>
                                <th>Ghế đã đặt</th>
                                <th>Ghế mình đặt</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                <td><button className="ghe gheDangDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                <td><button className="ghe gheDaDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                <td><button className="ghe gheDaDuocDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="col-span-3">
                <h3 className="text-green-400 text-center text-4xl"> 0</h3>
                <hr />
                <h3 className="text-xl mt-2">{thongTinPhim?.tenPhim}</h3>
                <p>Location: {thongTinPhim?.tenCumRap}</p>
                <p>Date: {thongTinPhim?.ngayChieu}</p>
                <hr />
                <div className="flex flex-row my-5">
                    <div className="w-4/5">
                        <span className="text-red-400 text-lg">Seat</span>
                    {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                        return <span key = {index} className="text-green-500 text-xl mr-2">{gheDD.stt}</span>
                    })}
                     
                    </div>
                    <div className="text-right col-span-1">
                        <span className="text-green-800 text-lg">
                            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                return tongTien += ghe.giaVe;
                            },0).toLocaleString()}
                        </span>
                    </div>
                </div>
                <hr />
                <div className="my-5">
                    <i>Email</i> <br />
                    
                </div>
                <hr />
                <div className="my-5">
                    <i>Phone</i> <br />
               
                </div>
                <hr />
                <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}>
                    <div  className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
                        onClick = {() => {
                            const thongTinDatVe = new ThongTinDatVe(); 
                            thongTinDatVe.danhSachVe = danhSachGheDangDat; 
                            thongTinDatVe.maLichChieu = props.match.params.id; 

                            dispatch(datVeAction(thongTinDatVe))
                        }}
                    >
                       Book Ticket
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}




const { TabPane } = Tabs;

function callback(key) {
console.log(key);
}
export default function CheckoutTab (props) {
    const {tabActive} = useSelector(state=>state.QuanLyDatVeReducer);
    const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch();
    //unmount trả lại tab ative
    useEffect(()=>{
        return ()=> {
            dispatch({
                type:'CHANGE_TAB_ACTIVE',
                number:'1'
            })
        }
    },[]);
     
    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> <button onClick={()=>{
           history.push('/profile')
        }}> <div style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center'}} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0,1)}</div>Hello ! {userLogin.taiKhoan}</button> <button onClick={()=>{
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push('/home');
            window.location.reload();
        }} className="text-blue-800">Log out</button> </Fragment>: ''} 


    </Fragment>

return <div className="p-5">
    <Tabs tabBarExtraContent={operations} defaultActiveKey="1"  activeKey={tabActive}
    onChange={(key)=>{
       dispatch({
            type:'CHANGE_TAB_ACTIVE',
            number:key.toString()
        })
    }}>
        <TabPane tab="01 Choose A Seat & Checkout" key="1">
            <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 Booking Ticket Result" key="2">
            <KetQuaDatVe {...props} /> 
        </TabPane>
        <TabPane tab={<div className="text-center" style={{display:'flex', justifyContent:'center',alignItems:'center'}}><NavLink to="/"><HomeOutlined style={{marginLeft:10,fontSize:25}} /></NavLink></div>} key="3">
             
             </TabPane>

    </Tabs>

</div>

}


function KetQuaDatVe(props) {
    
    const dispatch = useDispatch();
    
    const {thongTinNguoiDung} = useSelector(state => state.QuanLyNguoiDungReducer); 

    useEffect(() => {
     dispatch(layThongTinNguoiDungAction())
    }, []);


    console.log({thongTinNguoiDung});

    const renderTicketItem = () => {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe); 
            return <div key = {index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket?.hinhAnh} />
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{ticket?.tenPhim}</h2>
                    <p className="text-gray-500"><span className="font-bold">Show Time:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Date:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
                    <p> 
                        Cinema System: {seats.tenHeThongRap}
                    </p>
                    <p> 
                        Cinema Branch: {seats.tenCumRap} - Seat {ticket.danhSachGhe.map((ghe, index) => {
                            return <span key = {index} className = "mx-1">{ghe.tenGhe}</span>
                        })}
                    </p>
                </div>
            </div>
        </div>
        })
    }

return <div className="p-5">

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">Booking Ticket History</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please check your time and movie information. Have a great time! Thanks for choosing us !!</p>
            </div>
            <div className="flex flex-wrap -m-2">
                {renderTicketItem()}
                

            </div>
        </div>
    </section>

</div>
    
}
