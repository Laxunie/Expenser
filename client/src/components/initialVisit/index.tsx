import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import './styles.scss'
import { Input } from '../../components';

const InitialVisit = () => {

  const [name, setName] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(name)
  }

  return (  
    <div className='initialVisit'>
        <div className='initialVisit__container'>
            <h1 className='initialVisit__welcome'>Welcome to <span className='initialVisit__welcome--highlight'>Expenser</span></h1>
            <p className='initialVisit__message'>A web application built to track your day to day expenses</p>
            <div className='initialVisit__signin'>
                <section className='initialVisit__formSection'>
                  <h2 className='initialVisit__signinMessage'>Get Started Now!</h2>
                  <p className='initialVisit__inputMessage'>Simply enter your name below</p>
                  <form className='initialVisit__form'>
                      <Input className='initialVisit__inputName' type='text' placeholder='Name' onChange={handleNameChange} value={name} />
                      <button type='submit' className='initialVisit__submitButton'>Launch</button>
                  </form>
                </section>
                <p>This site is created to work on a single device and information cannot be transferred across multiple device.</p>
            </div>
        </div>
    </div>
  )
}

export default InitialVisit