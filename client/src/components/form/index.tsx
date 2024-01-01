import { FC } from 'react'
import "./styles.scss";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    
}

const Form: FC<FormProps> = ({children,  className, ...props}) => {

    console.log(`${className}__submitButton`)

    return (
        <>
            <form className={className} {...props}>
                {children}
                <button type='submit' className={`${className}__submitButton`}>Launch</button>
            </form>
        </>
    )
}

export default Form