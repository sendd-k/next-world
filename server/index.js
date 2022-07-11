const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const loginRoute = require("./routes/login");

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/user/register", usersRoute);
app.use("/user/login", loginRoute);

//Connecting to MongoDB
mongoose.connect(
  "mongodb+srv://NextWorld:KRT176LHL@nextworldcluster.i7wjs.mongodb.net/NextWorldDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

//Main server
app.listen(port, () => {
  console.log(`server is running on ${port}...`);
});
