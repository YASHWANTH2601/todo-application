const express = require("express");
const connectDB = require("./config/dataBase");
const app = express();
const todos = require("./routes/todos");
//database connection
connectDB();

//middlewaves
app.use(express.json());

//routes
app.use("/", todos);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
