import axios, { AxiosError, AxiosResponse } from 'axios';
import "./styles.scss";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
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
    const initialState = {
        store: '',
        amountPayed: NaN,
        date: '01/01/2024'
    }
    const [formData, setFormData] = useState(initialState)

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
    },[formData]);

    const handleAdd = async (e: FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/purchases', {
            store: formData.store,
            amountPayed: formData.amountPayed,
            dateOfPurchase: formData.date
        })

        setFormData(initialState)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value});
    }

    const addDropDown = () => {
        setToggleModal(state => state = !state);
    }

    const formatDate = (date: string) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString();
    }

    return (
        <>
            {toggleModal && 
                <Form className='purchases__form' text="Add" onSubmit={handleAdd}>
                    <Input className='form__input' type='text' placeholder='Store' onChange={handleChange} value={formData.store} name="store"/>
                    <Input className='form__input' type='number' placeholder="Price" onChange={handleChange} value={formData.amountPayed} name="amountPayed"/>
                    <Input className='form__input' type='date' onChange={handleChange} value={formData.date} name="date"/>
                </Form>
            }
            <div className='purchases__header'>
                <h1 className='purchases__title'>Recent Purchases</h1>
                {toggleModal 
                    ? <CiSquareMinus size={32} onClick={addDropDown} className='purchases__addButton'/> 
                    : <CiSquarePlus size={32} onClick={addDropDown} className='purchases__addButton'
                />}
            </div>
            <ul className='purchases__list'>
                {!Loading && purchasesData?.map((p) => (
                    <li className='purchases__items' key={p._id}>
                        <p className='purchases__item purchases__item--bold'>{p.store}</p>
                        <div className='purchases__item purchases__amountPayed'>
                            <p className='purchases__item--bold'>{p.amountPayed.toFixed(2)}{"\u0024"}</p>
                            <p className='purchases__itemLabel'>Purchase Amount</p>
                        </div>
                        <p className='purchases__item purchases__item--bold'>{formatDate(p.dateOfPurchase)}</p> 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Purchases