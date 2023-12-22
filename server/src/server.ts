import express, {Express, Request, Response} from 'express';
import {HydratedDocument, Schema, connect, model} from 'mongoose';
import categoriesRoute from './routes/categoriesRoute';
import 'dotenv/config';

const app: Express = express();
const {PORT, MONGOURI} = process.env;   

app.use(express.json());

app.use('/api/categories', categoriesRoute)

connect(MONGOURI ?? "")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server online and connected to MongoDB on port ${PORT}`);
    });
})
