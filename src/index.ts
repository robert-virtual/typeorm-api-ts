import "reflect-metadata";
import express from 'express'
import {createConnection} from "typeorm";
import productRoutes from "./routes/products";


(async()=>{

    const app = express()
    await createConnection()
    
    // middlewares
    app.use(express.json())
    
    // rutas
    app.use('/products',productRoutes)


    app.listen(5000,()=>{
        console.log('running on http://localhost:5000');
        
    })

})()
/*
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
*/