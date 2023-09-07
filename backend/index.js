import express, { request, response } from "express";
import { PORT, URI } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the Main Page');
});


// Middleware for handling cors origin
// Method 1: allow all origins with default of cors(*)
app.use(cors());
// Method 2: allow custom origins
// app.use(cors({
//         origin: '',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.use('/books', booksRoute);

mongoose
    .connect(URI)
    .then(() => {
        console.log('App connected to database.');
        app.listen(PORT, () => {
            console.log(`App is listening to Port: ${PORT}`);
        });
    })
    .catch(() => {
        console.log(error);
    })