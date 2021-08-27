import React from 'react';
import { Tabs } from 'antd';
import style from './Checkout.module.css';
import { CheckOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons'

 function Checkout(props) {
    return (
        <div className=" min-h-screen mt-5" >
        <div className="grid grid-cols-12">
            <div className="col-span-9">
                <div className="flex flex-col items-center mt-5">

                    <div className="bg-black " style={{ width: '80%', height: 15 }}>
                    </div>
                    <div className={`${style['trapezoid']} text-center`}>
                        <h3 className="mt-3 text-black">Màn hình</h3>
                    </div>
                    <div>
                        
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
                <h3 className="text-green-400 text-center text-4xl"> 10 đ</h3>
                <hr />
                <h3 className="text-xl mt-2">abc</h3>
                <p>Địa điểm: </p>
                <p>Ngày chiếu: </p>
                <hr />
                <div className="flex flex-row my-5">
                    <div className="w-4/5">
                        <span className="text-red-400 text-lg">Ghế</span>

                     
                    </div>
                    <div className="text-right col-span-1">
                        <span className="text-green-800 text-lg">
                            
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
                    <div  className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
                        ĐẶT VÉ
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
export default function (props) {

return <div className="p-5">
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
            <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
            <KetQuaDatVe {...props} />
        </TabPane>

    </Tabs>

</div>

}


function KetQuaDatVe(props) {





return <div className="p-5">

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">Lịch sử đặt vé khách hàng</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !</p>
            </div>
            <div className="flex flex-wrap -m-2">
                
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                            <p className="text-gray-500">10:20 Rạp 5, Hệ thống rạp cinestar bhd </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</div>
    
}