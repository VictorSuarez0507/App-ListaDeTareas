const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const tasksRouter = require("./src/Routes/tasksRouter");
const usersRouter = require("./src/Routes/usersRouter");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();
const port = 3000;
connectDB();

app.use(express.json()); 
app.use(cors());
app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
});