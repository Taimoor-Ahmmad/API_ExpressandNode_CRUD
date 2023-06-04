import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router=express.Router();

//mark database

let users=[]    //object of user-->since it is not json we can remove commas from keys

//using middleware
router.use(express.json());

router.get('/',(req,resp)=>{
    
    
    // console.log(users);
    resp.send(users);
})

/*  we are going to send data from client to server
    +
    we can't use chrome for that purpose bcz in url bars it is only
    making get requests
    
*/
router.post('/',(req,resp)=>{

    // console.log(req.body);//showing the data base in console
    const user=req.body;

    //we have to call it in while creating the user id
        
    const userWithId={...user,id: uuidv4()}

    users.push(userWithId);

    resp.send(`user with the name ${user.firstName} added to the codebase!`);
})


/* how can we retrive the /users/id with help of actual id like 2
   in the commented code we can use /users/test(id) we'll still be able to 
   retrive the same resp as before so to overcome it we are going to use
   users.params
*/
// router.get('/:id',(req,resp)=>{
//     resp.send('The get route request!');
// })

router.get('/:id',(req,resp)=>{


    const {id}=req.params;

    const foundUser=users.find((user)=>user.id===id);

    // console.log(req.params);//for outputing in console

    resp.send(foundUser);//for browser
})


router.delete('/:id',(req,resp)=>{

    const {id}=req.params;

    users=users.filter((user)=>user.id != id);

    resp.send(`user with id ${id} and ${users.firstName} deleted from database!`);
})

//patch method

router.patch('/:id',(req,resp)=>{

    const {id}=req.params;
    const {firstName,lastName,age}=req.body;

    const user=users.find((user)=>user.id===id);

    if(firstName){
        user.firstName=firstName;
    }

    if(lastName){
        user.lastName=lastName;
    }

    if(age){
        user.age=age;
    }
    
    resp.send(`user with the id ${id} has been updated!`); 
})
//for using it inside our index.js
export default router;