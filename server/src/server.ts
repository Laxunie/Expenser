import express, {Request, Response} from 'express';
import {connect} from 'mongoose';
import 'dotenv/config';

const app = express();
const {PORT, MONGOURI} = process.env;

connect(MONGOURI ?? "")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server online and connected to MongoDB on port ${PORT}`);
    });
})
