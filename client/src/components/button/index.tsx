import React, { FC } from 'react'
import "./styles.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    type: "submit"
}

const Button: FC<ButtonProps> = ({className, children, ...props}) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    )
}

export default Button