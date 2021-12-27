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
import Loading from './components/GlobalSetting/Loading';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import ShowTime from './pages/Admin/Showtime/ShowTime';

export const history = createBrowserHistory(); 

export default function App() {
  return (
    <Router history = {history}> 
      <Loading/>
    <Switch>
    <HomeTemplate path = "/home" exact Component = {Home}/> 
    <HomeTemplate path = "/" exact Component = {Home}/> 
    <HomeTemplate path = "/contact" exact Component = {Contact}/> 
    <HomeTemplate path = "/news" exact Component = {News}/> 
    <HomeTemplate path = "/detail/:id" exact Component = {Detail}/> 
    <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
    <UserTemplate path = "/login" exact Component = {Login}/> 
    <UserTemplate path = "/register" exact Component = {Register}/> 
    
    <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={ShowTime} />

        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
    </Switch>
    </Router>
  )
}
