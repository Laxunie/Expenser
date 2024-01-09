import "./styles.scss";
import { Form, Input } from '..'
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import axios from "axios";

interface SettingsProps  extends React.HTMLAttributes<HTMLDivElement> {
    setToggleSettings: Dispatch<SetStateAction<boolean>>,
}

const Settings: FC<SettingsProps> = () => {

    const [formData, setFormData] = useState({
        employer: "",
        monthlyIncome:NaN
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const uid = localStorage.getItem('uid');
        await axios.put(`http://localhost:5000/api/users/${uid}`, {
            employer: formData.employer,
            monthlyIncome: formData.monthlyIncome
        });
    }

  return (
    <div className='settings' id="settings">
        <Form text='Update' onSubmit={handleSubmit} className="settings__form">
            <Input type="text" placeholder="Employer" onChange={handleChange} value={formData.employer} name="employer"/>
            <Input type="number" placeholder="Monthly Income" onChange={handleChange} value={formData.monthlyIncome} name="monthlyIncome"/>
        </Form>
    </div>
  )
}

export default Settings