import {Router, Request, Response} from 'express';
import Purchases from "../models/purchases";

const router = Router();

type ErrorTypes = string | number | Date;

interface Errors{
    [key: string]: ErrorTypes
}

router.post('/', async (req: Request, res: Response) => {
    const errors: Errors = {};

    try{
        if(!req.body.store) errors.store = "Store must be specified";
        if(!req.body.amountPayed) errors.amountPayed = "Amount payed must be specified";
        if(!req.body.dateOfPurchase) errors.dateOfPurchase = "Date of purchase must be specified";

        if (Object.keys(errors).length > 0) {
            throw new Error('Validation requirements have not been met');
        }

        const purchases = new Purchases({
            store: req.body.store,
            amountPayed: req.body.amountPayed,
            dateOfPurchase: req.body.dateOfPurchase
        })

        await purchases.save();

        res.status(201).json(purchases);
    }
    catch(err){
        res.status(401).json(errors)
    }
})

router.get('/', async (req: Request, res: Response) => {
    const purchases = await Purchases.find();

    res.status(201).json(purchases);
})

export default router;


