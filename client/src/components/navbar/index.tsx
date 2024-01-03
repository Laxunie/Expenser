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
  })

  const handleMouseEnter: MouseEventHandler = () => {
      setToggleSettings(state => state = !state);
  }
  
  return (
    <div className='navbar'>
        <h2 className='navbar__welcome'>Welcome <span className='navbar__welcome--highlight'>{user.name}</span></h2>
        <CiSettings size={32} className="navbar__settings" onClick={handleMouseEnter}/>
        {toggleSettings && <ProfileSettings setToggleSettings={setToggleSettings}/>}
    </div>
  )
}

export default Navbar