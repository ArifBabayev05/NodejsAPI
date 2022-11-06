const express = require('express');
const productRouter = require('./routes/product')
const dealRouter = require('./routes/deal')
const scheduleRouter = require('./routes/schedule')
const companyRouter = require('./routes/company')
const notesRouter = require('./routes/notes')
const userRouter = require('./routes/userRouter')


const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser")
const cors =require("cors")

const app = express();

app.use(bodyParser.json())

app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sjpf18q.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e);
        }
        else {
            console.log("Connected to Database")
        }
    })
const isLoggedIn = false;


app.get('/', (req, res) => {
    if (!isLoggedIn) {
        res.send("Hello User");
    }
    else {
        res.send("Hello Guest");
    }
})
app.use('/products', productRouter)
app.use('/deals', dealRouter)
app.use('/schedule', scheduleRouter)
app.use('/company',companyRouter)
app.use('/notes',notesRouter)
app.use('/user',userRouter)


app.listen(2006, () => {
    console.log("Server is running on 2006");
});


// GetAll Products //get
// Get Product //:id //get
// Create Product //post
// Update Product //:id //put
// Delete Product //id //delete

