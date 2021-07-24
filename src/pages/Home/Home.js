import React, { useEffect }  from 'react'
import HomeMenu from './HomeMenu/HomeMenu'; 
import Footer from '../../templates/HomeTemplate/Layout/Footer/Footer';
import Film from '../../components/Film/Film'; 
import {useSelector, useDispatch} from 'react-redux'; 
import { PlayCircleOutlined } from '@ant-design/icons'
import {layDanhSachHeThongRapAction} from '../../redux/actions/QuanLyRapAction/QuanLyRapAction'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'; 
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction/QuanLyPhimAction';

export default function Home () {

    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);

    const {arrFilm} = useSelector(state => state.QuanLyPhimReducer);
    console.log("arrFilms", arrFilm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachHeThongRapAction())
       
    }, []);

    const renderFilms = () => {
        return arrFilm.map((item, index) => {
            return <Film key = {index} item={item}/>
        })
    }

    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action); //dispatch function từ thunk
    },[])

    return (
        <div>
            <div className="container">
          <div className="mr-2 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <div
            style={{  backgroundPosition: 'center', backgroundSize: '100%' }}
        >
            <img src="" alt= "" className="opacity-0 w-full" style={{ height: '300px' }} />
        </div>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">abc</h1>
        <p className="leading-relaxed mb-3 h-16">..</p>
        <a className="text-indigo-500 inline-flex items-center" href="a">ĐẶT VÉ
<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
            </svg>
        </a>

    </div>
    </div>
    <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto " >

                    <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>


           <HomeMenu heThongRapChieu = {heThongRapChieu}/>
            <Footer/>
        </div>
    )
}
