import Monthly from "../models/monthly";
import {Router, Request, Response} from 'express';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try{
        const monthly = new Monthly({
            title: req.body.title,
            description: req.body.description,
        })
        await monthly.save();

        res.status(201).json(monthly);
    }
    catch(err){
        res.status(500).send("Title cannot be empty");
    }
})

export default router;


