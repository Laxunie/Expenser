import Categories from "../models/categories";
import {Router, Request, Response} from 'express';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try{
        const category = new Categories({
            title: req.body.title,
            description: req.body.description,
        })
        await category.save();

        res.status(201).json(category);
    }
    catch(err){
        res.status(400).send("Title cannot be empty");
    }
})

export default router;


