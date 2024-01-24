import {Router, Request, Response} from 'express';
import Users from '../models/users';

const router = Router();

type ErrorTypes = string | number

interface Errors{
    [key: string]: ErrorTypes
}

interface UpdateField{
    [key: string]: string | number
}

router.get('/:id', async (req: Request, res: Response) => {
    try{
        const user = await Users.findById(req.params.id);

        res.status(201).json(user);
    }
    catch{
        res.status(500).send("User not found");
    }
    
})

router.post('/', async (req: Request, res: Response) => {
    const errors: Errors = {};
    if(!req.body.name) errors.name = "Name must be provided";
    console.log(req.body);

    try{
        const user = await Users.findOne({name: req.body.name});
        if(user) return res.status(200).send(user._id);

        const newUser = new Users({
            name: req.body.name,
        })
    
        await newUser.save();

        res.status(201).json(newUser);
    }
    catch{
        res.status(500).send(errors);
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    const updateFields: UpdateField = {};

    if(req.body.employer !== "" && req.body.employer !== undefined) updateFields.employer = req.body.employer;
    if(req.body.monthlyIncome !== 0 && req.body.monthlyIncome !== undefined) updateFields.monthlyIncome = req.body.monthlyIncome;
    
    try{
        await Users.findByIdAndUpdate(req.params.id, {
           $set: updateFields
        },{
            new: true
        })
        res.status(201).send("Settings updated!");
    }catch{
        res.status(500).send("User ID does not exist");
    }
    
})

export default router;