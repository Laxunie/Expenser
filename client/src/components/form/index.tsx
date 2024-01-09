import { FC } from 'react'
import "./styles.scss";
import Button from '../button';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    text? : string,
}

const Form: FC<FormProps> = ({children,  className, text, onMouseEnter, onMouseLeave, ...props}) => {

    return (
        <>
            <form className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
                {children}
                <Button type='submit' className={`${className}__submitButton`}>{text || "Submit"}</Button>
            </form>
        </>
    )
}

export default Form