import Bill from "../models/bills";
import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const bills = await Bill.find();
    res.status(201).json(bills);
})

router.post('/', async (req: Request, res: Response) => {
    try{
        const bill = new Bill({
            title: req.body.title,
            expenses: req.body.expenses,
        })
        await bill.save();

        res.status(201).json(bill);
    }
    catch(err){
        res.status(500).send("Title cannot be empty");
    }
})

export default router;


