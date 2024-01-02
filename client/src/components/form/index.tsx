import { FC } from 'react'
import "./styles.scss";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    text? : string
}

const Form: FC<FormProps> = ({children,  className, text, ...props}) => {

    return (
        <>
            <form className={className} {...props}>
                {children}
                <button type='submit' className={`${className}__submitButton`}>{text || "Submit"}</button>
            </form>
        </>
    )
}

export default Form