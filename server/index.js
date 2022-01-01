const express = require("express");

// Config
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

// Routes
const testAPIRoute = require("./routes/api/test");

// 'urlencoded' is used to handle 'application/x-www-form-urlencoded' data
app.use(express.urlencoded({ extended: false }));
app.use("/api", testAPIRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
