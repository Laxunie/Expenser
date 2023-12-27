import "./styles.scss";

import { Purchases, InitialVisit } from '../../components';
import { useState } from "react";

const Home = () => {

    const [user, setUser] = useState(false);

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