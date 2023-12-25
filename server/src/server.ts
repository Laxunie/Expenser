import express, { Express } from 'express';
import { connect } from 'mongoose';
import categoriesRoute from './routes/categoriesRoute';
import 'dotenv/config';
import purchasesRoute from './routes/purchasesRoute';

const app: Express = express();
const {PORT, MONGOURI} = process.env;   

app.use(express.json());

app.use('/api/categories', categoriesRoute)
app.use('/api/purchases', purchasesRoute)

connect(MONGOURI ?? "")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server online and connected to MongoDB on port ${PORT}`);
    });
})
