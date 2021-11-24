require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./database');
const app = express();

const morgan = require('morgan');

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/user", require("./routes/authenticate"))
app.use("/", require("./routes/CRUD"))



app.listen(process.env.PORT, () => {
    console.log(`server is live on ${process.env.PORT}`);
})