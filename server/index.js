const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require( './models/users')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true
}));

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Employee");

app.post('/login', (req,res) =>{

    const{email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {

        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("User not existed")
        }
    })
})

app.post('/register', (req,res) =>{

    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))

})

app.listen(3001, () =>{

    console.log("server is running")
})