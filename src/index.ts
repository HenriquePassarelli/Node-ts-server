import express, { Express } from 'express';
import route from './routes'
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || process.env.API_PORT;

const server: Express = express();
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan('dev'));

server.use('/', route)

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})