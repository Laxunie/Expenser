import axios, { AxiosError, AxiosResponse } from 'axios';
import "./styles.scss";
import { useEffect, useState } from "react";

interface Purchase{
    store: string,
    amountPayed: number,
    dateOfPurchase: string,
    _id: string,
}

const Purchases = () => {
    const [purchasesData, setPurchaseData] = useState<Purchase[]>();
    const [Loading, setLoading] = useState(true);

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

    return (
        <>
            <h1 className='purchases__title'>Recent Purchases</h1>
            <ul className='purchases__list'>
                {!Loading && purchasesData?.map((p) => (
                    <li className='purchases__item' key={p._id}>
                        <p className='purchases__store'>{p.store}</p>
                        <p className='purchases_amountPayed'>{p.amountPayed}</p>
                        <p className='purchases__dateOfPurchase'>{p.dateOfPurchase}</p> 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Purchases