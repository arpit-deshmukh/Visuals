
import express from 'express';

import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";
import {connectToSocket} from './controllers/socketManager.js';


import cors from "cors";
import userRoutes from "./routes/users.routes.js";




const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",process.env.PORT || 8080);
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb" , extended:true}));

app.use("/api/v1/users",userRoutes);
// app.use("/api/v2/users",newUserRoutes) #tfor next versions


const start = async() =>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://arpit_deshmukh:Nokia%4045@visuals-db.p2nvbbw.mongodb.net/")
    console.log(`MONGO connected DB host : ${connectionDb.connection.host}`)

    server.listen(app.get("port"),()=>{
        console.log("Listening to port 8080")
    })
    // app.listen(8080,()=>{
    //     console.log("Listening on port 8080")
    // })
}

start();
