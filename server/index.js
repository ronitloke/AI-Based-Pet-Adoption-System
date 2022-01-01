const express = require("express");

// Config
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const db = require("./data/database");

const app = express();

// 'urlencoded' is used to handle 'application/x-www-form-urlencoded' data
app.use(express.json());

// Routes
const testAPIRoute = require("./routes/api/test");
app.use("/api", testAPIRoute);

db.connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
