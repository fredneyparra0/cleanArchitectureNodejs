import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import 'reflect-metadata'

import { router } from './routes/index';
import { makeDb } from '../dataAccess/index';

const app = express();
const PORT = process.env.PORT || 3100;

dotenv.config();

/* Express configuration
*/ 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

/* Connect to Database
*/ 
makeDb();

app.use(router);

app.listen(PORT, () => {
    console.log(`Runing in port ${PORT}`)
})

