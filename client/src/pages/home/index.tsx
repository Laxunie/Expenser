import "./styles.scss";

import { Purchases, InitialVisit } from '../../components';
import { useEffect, useState } from "react";

const Home = () => {

    const [user, setUser] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('uid');
        user && setUser(true);
    },[])

    return (
        <div className='home'>
            {!user && <InitialVisit setUser={setUser}/>}
            <div className='home__chart'></div>
            <div className='home__options'></div>
            <div className='home__purchases'>
                <Purchases/>
            </div>
        </div>
  )
}

export default Home