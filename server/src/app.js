const express = require("express");
const cors = require("cors");

const problemRoutes = require("./routes/problemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Online Judge Backend is running"
    });
});

app.use("/api/problems", problemRoutes);
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
module.exports = app;