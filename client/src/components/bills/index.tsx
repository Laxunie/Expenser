import React, { EventHandler, useEffect, useState } from 'react'
import './styles.scss';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import Card from '../card';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface Bills{
  title: string,
  expenses: []
}

const Bills = () => {
    const [newCard, setNewCard] = useState(false);
    const [expenses, setExpenses] = useState<Bills[]>([]);

    const handleAddCard = (e: MouseEvent) => {
        e.preventDefault();
        setNewCard(prev => prev = !prev);
        console.log(expenses)
    }

    useEffect(() => {
      const fetch = async () => {
        await axios.get("http://localhost:5000/api/bills").then((response: AxiosResponse) => {
          setExpenses(response.data);
        }).catch((error: AxiosError) => {
          console.log(error)
        })
      }
        fetch();
      },[expenses, setNewCard])
  return (
    <div className='bills'>
        <section className='bills__header'>
            {newCard ? <CiSquareMinus size={32} className="bills__addButton" onClick={handleAddCard}/> : <CiSquarePlus size={32} className="bills__addButton" onClick={handleAddCard}/>}
            <h1 className='bills__title'>Recurring Bills</h1>
        </section>
        <div className='bills__container'>
         {newCard && <Card type='new' title="Title" setNewCard={setNewCard}/>}
          {expenses.map(expense => (
              <Card title={expense.title} expenses={expense.expenses}/>
            ))}
        </div>
    </div>
  )
}

export default Bills