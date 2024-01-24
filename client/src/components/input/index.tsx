import React, { FC } from 'react'
import './styles.scss';

type ValueTypes = string | number
interface InputProps extends React.HTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "email" | "number" | "date",
    placeholder?: string,
    value: ValueTypes,
    name?: string,
}

const Input: FC<InputProps> = ({className, type, placeholder, value, name, id, ...props}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} value={value} name={name} id={id} {...props}/>
  )
}

export default Input