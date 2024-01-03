import { FC, MouseEventHandler } from 'react'
import "./styles.scss";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    text? : string,
    onMouseEnter?: MouseEventHandler,
    onMouseLeave?: MouseEventHandler
}

const Form: FC<FormProps> = ({children,  className, text, onMouseEnter, onMouseLeave, ...props}) => {

    return (
        <>
            <form className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
                {children}
                <button type='submit' className={`${className}__submitButton`}>{text || "Submit"}</button>
            </form>
        </>
    )
}

export default Form