require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB();

app.use(express.json());

const authRoutes = require("./routes/auth.routes");

app.use("/api/auth", require("./routes/auth.routes"));

app.get("/", (req, res) => {
    res.json({
        ok: true,
        message: "API funcionando correctamente"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});