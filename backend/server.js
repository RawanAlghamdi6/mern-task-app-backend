// **** Setup our server **** 
const dotenv = require ("dotenv").config();
const express = require ("express"); // get express 
const connectDB = require ("./config/connectDB");
const mongoose = require ("mongoose");
const Task = require ("./models/taskModel");
const taskRoutes = require ("./routes/taskRoute");
const cors = require ("cors"); 

const app = express () 

//Middleware 
app.use(express.json()); // to access the data that's we send from body
app.use(express.urlencoded ({extended : false}));
app.use(cors()); // accsepit requst from any URL (to share resourse between front and back) 
app.use("/api/tasks", taskRoutes);

//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});


const PORT = process.env.PORT || 5000 /* special file which is dot env (environment), that's where we store some variable that's gonna change when we upload our app to the server 
                                         when we upload our app to heroka it's going first look for PORT */ 

mongoose.connect(process.env.MONGO_URI)
     .then (() => {
        app.listen(PORT , () => {
            console.log(`Server is running on port ${PORT}`); 
        }); 
     }).catch ((err) => console.log(err)); 

