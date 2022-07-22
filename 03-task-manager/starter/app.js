const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware

app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(3000, (req, res) => {
      console.log("Server listen on port 3000 ...");
    });
  } catch (error) {}
};

start();
