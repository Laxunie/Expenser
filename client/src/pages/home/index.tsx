import "./styles.scss";

import { Purchases, InitialVisit } from '../../components';

const Home = () => {

    const user = localStorage.getItem('user');

    return (
        <div className='home'>
            {!user && <InitialVisit/>}
            <div className='home__chart'></div>
            <div className='home__options'></div>
            <div className='home__purchases'>
                <Purchases/>
            </div>
        </div>
  )
}

export default Home