import "./styles.scss";

import { Purchases, InitialVisit, Navbar } from '../../components';
import { useEffect, useState } from "react";

const Home = () => {

    const [user, setUser] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('uid');
        user && setUser(true);
    },[])

    return (
        <div className='home'>
            <Navbar/>
            <div className="home__grid">
                {!user && <InitialVisit setUser={setUser}/>}
                <div className='home__chart'></div>
                <div className='home__options'></div>
                <div className='home__purchases'>
                    <Purchases/>
                </div>
            </div>
        </div>
  )
}

export default Home