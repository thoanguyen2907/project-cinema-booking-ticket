import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import styleLoading from './Loading.module.css';


export default function Loading() {
    const isLoading =  useSelector(state => state.LoadingReducer.isLoading); 
    if(isLoading){
        return (
            <div className={styleLoading.loading}>
                <h4>Loading ...</h4>
                {/* <img src={bgImg} alt="loading"/> */}
            </div>
        )
    } else {
        return ""
    }
   
}
