import axios, { AxiosError, AxiosResponse } from 'axios';
import "./styles.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Form, Input } from '..';

interface Purchase{
    store: string,
    amountPayed: number,
    dateOfPurchase: string,
    _id: string,
}

const Purchases = () => {
    const [purchasesData, setPurchaseData] = useState<Purchase[]>();
    const [Loading, setLoading] = useState(true);
    const [toggleModal, setToggleModal] = useState(false);
    const [formData, setFormData] = useState({
        store: '',
        amountPayed: 0,
        date: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:5000/api/purchases').then((response: AxiosResponse) => {
                setPurchaseData(response.data);
                setLoading(false);
            }).catch((error: AxiosError) => {
                console.log(error);
            })
        } 

        fetchData();
    },[]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value});
    }

    const addPurchase = () => {
        setToggleModal(state => state = !state);
    }

    return (
        <>
            {toggleModal && 
                <Form>
                    <Input className='form__input' type='text' placeholder='Name' onChange={handleChange} value={formData.store} name="store"/>
                    <Input className='form__input' type='number' placeholder='Name' onChange={handleChange} value={formData.amountPayed} name="amountPayed"/>
                    <Input className='form__input' type='date' placeholder='Name' onChange={handleChange} value={formData.date} name="date"/>
                </Form>
            }
            <div className='purchases__header'>
                <h1 className='purchases__title'>Recent Purchases</h1>
                <CiSquarePlus size={32} onClick={addPurchase}/>
            </div>
            <ul className='purchases__list'>
                {!Loading && purchasesData?.map((p) => (
                    <li className='purchases__items' key={p._id}>
                        <p className='purchases__item purchases__item--bold'>{p.store}</p>
                        <div className='purchases__amountPayed'>
                            <p className='purchases__item purchases__item--bold'>{p.amountPayed.toFixed(2)}{"\u0024"}</p>
                            <p className='purchases__itemLabel'>Purchase Amount</p>
                        </div>
                        <p className='purchases__item purchases__item--bold'>{p.dateOfPurchase}</p> 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Purchases