import { MouseEventHandler, useEffect, useState } from 'react';
import { CiSettings } from "react-icons/ci";

import "./styles.scss";
import axios from 'axios';
import { ProfileSettings } from '..';

interface User{
  [key: string]: string | number,
}

const Navbar = () => {
  const [user, setUser] = useState<User>({});
  const [toggleSettings, setToggleSettings] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('uid');
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:5000/api/users/${user}`);
      setUser(response.data);
    }
    fetchUser();
  },[])

  const handleMouseEnter: MouseEventHandler = () => {
      setToggleSettings(state => state = !state);
  }
  
  return (
    <div className='navbar'>
        <h2 className='navbar__welcome'>Welcome <span className='navbar--highlight'>{user.name}</span></h2>
        <div className='navbar__userInfo'>
          <h3>Current Employer: <span className='navbar--highlight'>{user.employer}</span></h3>
          <h3>Monthly Income: <span className='navbar--highlight'>${user.monthlyIncome}</span></h3>
          <CiSettings size={32} className="navbar__settings" onClick={handleMouseEnter}/>
        </div>
        {toggleSettings && <ProfileSettings setToggleSettings={setToggleSettings}/>}
    </div>
  )
}

export default Navbar