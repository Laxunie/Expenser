import React, { useEffect, useState } from 'react';
import "./styles.scss";
import axios from 'axios';

const Navbar = () => {

  interface User{
    [key: string]: string | number,
  }

  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const user = localStorage.getItem('uid');
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:5000/api/users/${user}`);
      setUser(response.data);
    }
    fetchUser();
  })

  return (
    <div className='navbar'>
        <h2 className='navbar__welcome'>Welcome <span className='navbar__welcome--highlight'>{user.name}</span></h2>
    </div>
  )
}

export default Navbar