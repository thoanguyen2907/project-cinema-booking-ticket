import React, { useEffect }  from 'react';
import { Carousel } from 'antd';
import {useSelector, useDispatch} from 'react-redux'; 
import {getCarouselAction} from '../../../../redux/actions/CarouselActions/CarouselActions'



const HomeCarousel = () => {
  const {arrCarousel} = useSelector(state => state.CarouselReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center'
  
  };
  const renderImg = () => {
    return arrCarousel.map((item, index) => {
     return <div key={index}>
      <div style={ {...contentStyle, backgroundImage: `url(${item.hinhAnh})`, backgroundSize: '100%' }}>
        <img src={item.hinhAnh} className="w-full opacity-0" alt={item.hinhAnh} />
      </div>
    </div>
    })
  }

  return (
    <Carousel effect="fade">
          {renderImg()} 
  
 
  </Carousel>
  );
}

export default HomeCarousel;
