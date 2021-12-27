import React, { useEffect }  from 'react'
import HomeMenu from './HomeMenu/HomeMenu'; 
import Footer from '../../templates/HomeTemplate/Layout/Footer/Footer';
import Film from '../../components/Film/Film'; 
import {useSelector, useDispatch} from 'react-redux'; 
import { PlayCircleOutlined } from '@ant-design/icons'
import {layDanhSachHeThongRapAction} from '../../redux/actions/QuanLyRapAction/QuanLyRapAction'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'; 
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction/QuanLyPhimAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';

export default function Home () {

    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);

    const {arrFilm} = useSelector(state => state.QuanLyPhimReducer);
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction())
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
            <HomeCarousel/>
            <div className="container  mx-auto ">
        
  
    <section className="text-gray-600 body-font" >
                <div className="px-5 py-24" >

                    <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

        
           <HomeMenu heThongRapChieu = {heThongRapChieu}/>
           </div>
        
        </div>

    )
}
