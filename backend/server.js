const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/tasks", require("./routes/taskRoutes"))

mongoose.connect(process.env.MONGO_URI
).then(() => {
    console.log("Conectado a MongoDB");
}).catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
});

app.get("/", (req, res) => {
    res.send("API Funcionando!");
});

app.listen(5000, () => {
    console.log("Servidor corriendo en puerto 5000");
});