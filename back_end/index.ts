import express from "express";
import router from "./routes";
import cors from 'cors';

const server = express();

server.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
}));

server.use(express.json());

server.use(express.urlencoded({extended: true}));

server.use(router);

server.listen(5000);