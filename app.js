const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./utils/constants");
const { tasksRouter } = require("./routes/router");

const app = express();
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("<center>Welcome to Tasks Manager<br><a href='/tasks'>Get all Tasks</a></center>");
});

app.use("/api/v1/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`server started listening on port ${PORT}\nhttp://localhost:${PORT}`);
});
