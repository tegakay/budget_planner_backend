const express = require("express");
const mongoose = require("mongoose");
var path = require("path");
const cors = require('cors');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const transactionsRoute = require("./routes/transaction")
const {authenticate} = require("./middlewares/auth")


const app = express();

const PORT = 5000 || process.env.PORT;

//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors());

// Define authentication routes
app.use('/', authRoute);

// Define user routes
app.use('/user', userRoute);
app.use('/transactions',authenticate, transactionsRoute)

const startServer = async () => {
    try {
      mongoose.set("strictQuery", false);
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`DB Connected on ${conn.connection.host}`)
      app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`);
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  startServer();