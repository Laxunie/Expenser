import categoryModel from "../models/categories";
import {Router, Request, Response} from 'express';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try{
        const category = new categoryModel({
            title: req.body.title,
            description: req.body.description,
        })

        console.log(category);
    
        await category.save();

        res.status(200).json(category);
    }
    catch(err){
        console.log(err);
    }
})

export default router;


