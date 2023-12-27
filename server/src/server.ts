import express, { Express } from 'express';
import { connect } from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import categoriesRoute from './routes/categoriesRoute';
import purchasesRoute from './routes/purchasesRoute';
import usersRoute from './routes/usersRoute';

const app: Express = express();
const {PORT, MONGOURI} = process.env;   

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoriesRoute)
app.use('/api/purchases', purchasesRoute)
app.use('/api/users', usersRoute);

connect(MONGOURI ?? "")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server online and connected to MongoDB on port ${PORT}`);
    });
})
