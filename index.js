import express from 'express';
import bodyParser from 'body-parser';//this allows us to take in incoming post request bodies
import usersRoutes from './routes/users.js';


const app=express();


app.use('/users',usersRoutes);


/*  initializing our express app-->whole application lies in "app" variable
    initializing our port number for express*/


const PORT=5000;

/*  using middleware
    json-->javascript object notation
    using json shows we'll use it as function in our app
    (common format for sending and receiving data)*/
app.use(bodyParser.json());

//routes
app.get('/',(req,resp)=>{
    console.log('Hello from Hell');
    resp.send("Salam from Heaven!");
})

app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}/users`)
})



