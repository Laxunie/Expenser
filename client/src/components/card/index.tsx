import React, { ChangeEvent, Dispatch, FC, FormEvent, FormEventHandler, SetStateAction, useState } from 'react'
import './styles.scss'
import { Form, Input } from '..'
import { CiSquarePlus } from 'react-icons/ci'
import axios from 'axios'

interface Card{
  type?: "new"
  title: string,
  expenses?: Expense[],
  setNewCard?: Dispatch<SetStateAction<boolean>>;
}

interface Expense{
  name: string,
  cost: string
}
const Card: FC<Card> = ({type, title, expenses, setNewCard}) => {

  const [newExpense, setNewExpense] = useState<Expense[]>([]);
  const [expenseTitle, setExpenseTitle] = useState("");

  const handleClick = () => {
    setNewExpense(prev => [...prev, {name: "", cost: ""}])
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const {value, name} = e.target

    if(name === "title") setExpenseTitle(value)
    else {
      setNewExpense(prevArray => 
        prevArray.map((expense, i) =>
          i === index ? {...expense, [name]: value} : expense
      ))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/bills', {
      title: expenseTitle,
      expenses: newExpense
    })
    if(setNewCard) {
      setNewCard(false)
    }
  }
  return (
    <div className='card'>
      {type ?
        <Form className="card__form" text='Create' onSubmit={handleSubmit}>
          <Input className="small" type="text" placeholder={title} name="title" value={expenseTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 0)}/>
          <section className='card__expenses'>
            {newExpense.map((expense, index) => (
              <div className='card__expenseItem'>          
                <Input className='card__item' type='text' placeholder='Name' value={expense.name} name="name" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}/>
                <Input className='card__item' type='number' placeholder='Cost' value={expense.cost} name="cost" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}/>
              </div>
            ))}
            <div>
              {newExpense.length < 6 && <CiSquarePlus size={32} onClick={handleClick}/>}
            </div>
          </section>
        </Form>
        :
        <div className="card__layout">
          <h1>{title}</h1>
          <section className='card__expenses'>
            {expenses?.map(expense => (
              <div className='card__expenseItem'>
                <p className='card__item'>{expense.name}</p>
                <p className='card__item card__item--bold'>{!isNaN(parseInt(expense.cost)) ? parseInt(expense.cost).toFixed(2) + "\u0024" : ""}</p>
              </div>
            ))}
          </section>
        </div>
      }
    </div>
  )
}

export default Card