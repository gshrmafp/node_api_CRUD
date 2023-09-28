const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Connecting to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected with MongoDB - nodeapi_crud");
    
    // Start your server only after successfully connecting to the database
    app.listen(9400, () => {
      console.log("Your server is up and running and run at port number: 9400");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  // import routes 
  const userRoutes = require("./routes/user"); // Update the import

  // middleware
  app.use(express.json());


  // route middleware
  app.use("/api/users", userRoutes); // Use the user routes 


 



