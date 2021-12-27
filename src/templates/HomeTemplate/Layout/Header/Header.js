import React, { Fragment } from 'react'; 
import { Select } from 'antd';

import _ from 'lodash';
//Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';
import { history } from '../../../../App';
import { NavLink } from 'react-router-dom';

const { Option } = Select;

 function Header(props) {
  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer); 
  const { t, i18n } = useTranslation();
  
  const handleChange = (value) => {
    i18n.changeLanguage(value)
}
const renderLogin = () => {
  
  if (_.isEmpty(userLogin)) {
      return <Fragment>
          <button onClick={() => {
              history.push('login')
          }} className="self-center text-white px-8 py-3 rounded">Sign-in</button>
          <button onClick={() => {
              history.push('register')
          }} className="self-center px-8 py-3 font-semibold rounded text-white ">Register</button>

      </Fragment>
  }

  return <Fragment> <button onClick={() => {
      history.push('/profile')
  }} className="self-center px-8 py-3 rounded">Hello ! {userLogin.taiKhoan}</button>
      <button onClick={() => {
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(TOKEN);
          history.push('/home');
          window.location.reload();
      }} className="text-yellow-500 mr-5">Log out</button>
  </Fragment>
}


    return (
      <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-30 bg-white text-black w-full fixed z-10">
  <div className="container flex justify-between h-16 mx-auto">
    <div className="items-center flex-shrink-0 hidden lg:flex">
    {renderLogin()}
    <Select defaultValue="en" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="en">Eng</Option>
                        <Option value="chi">Chi</Option>

                        <Option value="vi">Vi</Option>
                    </Select>
    </div>
    
    <button className="p-4 lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>

    )
}
export default Header; 
