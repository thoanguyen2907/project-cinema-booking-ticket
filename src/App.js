import React from 'react'

import {createBrowserHistory} from 'history'; 

import {Router, Switch} from 'react-router-dom';
import {HomeTemplate} from './templates/HomeTemplate/HomeTemplate';  
import Home from './pages/Home/Home';
import 'antd/dist/antd.css';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';

export const history = createBrowserHistory(); 

export default function App() {
  return (
    <Router history = {history}> 
    <Switch>
    <HomeTemplate path = "/home" exact Component = {Home}/> 
    <HomeTemplate path = "/" exact Component = {Home}/> 
    <HomeTemplate path = "/contact" exact Component = {Contact}/> 
    <HomeTemplate path = "/register" exact Component = {Register}/> 
    <HomeTemplate path = "/news" exact Component = {News}/> 
    <HomeTemplate path = "/detail/:id" exact Component = {Detail}/> 
    <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
    <UserTemplate path = "/login" exact Component = {Login}/> 

    </Switch>
    </Router>
  )
}
