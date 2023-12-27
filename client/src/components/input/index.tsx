import React, { FC } from 'react'
import './styles.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "email" | "number",
    placeholder?: string,
    value: string
}

const Input: FC<InputProps> = ({className, type, placeholder, value, ...props}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} value={value} {...props}/>
  )
}

export default Input