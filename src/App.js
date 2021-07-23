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

export const history = createBrowserHistory(); 

export default function App() {
  return (
    <Router history = {history}> 
    <Switch>
    <HomeTemplate path = "/home" exact Component = {Home}/> 
    <HomeTemplate path = "/" exact Component = {Home}/> 
    <HomeTemplate path = "/contact" exact Component = {Contact}/> 
    <HomeTemplate path = "/login" exact Component = {Login}/> 
    <HomeTemplate path = "/register" exact Component = {Register}/> 
    <HomeTemplate path = "/news" exact Component = {News}/> 
    </Switch>
    </Router>
  )
}
