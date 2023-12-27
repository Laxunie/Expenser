import {Router, Request, Response} from 'express';
import Users from '../models/users';

const router = Router();

type ErrorTypes = string | number

interface Errors{
    [key: string]: ErrorTypes
}

router.get('/', async (req: Request, res: Response) => {
    const user = await Users.findOne({
        name: req.body.name
    })

    res.status(201).json(user);
})

router.post('/', async (req: Request, res: Response) => {
    const errors: Errors = {};
    if(!req.body.name) errors.name = "Name must be provided";

    try{
        const user = new Users({
            name: req.body.name,
        })
    
        await user.save();

        res.status(201).json(user);
    }
    catch{
        res.status(500).send(errors);
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    try{
        const user = await Users.findByIdAndUpdate(req.params.id, {
            employer: req.body.employer,
            monthlyIncome: req.body.monthlyIncome,
        },{
            new: true
        })
    
        res.status(201).send(user);
    }catch{
        res.status(500).send("User ID does not exist");
    }
    
})

export default router;