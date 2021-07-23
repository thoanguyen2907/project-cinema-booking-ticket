
import {Route} from "react-router-dom";

import Header from './Layout/Header/Header'; 
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
export const HomeTemplate = (props) => {
const {Component, ...restProps} = props; 
return <Route {...restProps} render = {(propsRoute) => {
    return <>
    <Header {...propsRoute}></Header>
    <HomeCarousel {...propsRoute}/>

    <Component {...propsRoute}/>

    <footer>Đây là footer</footer>
     </>
}}/> 
}