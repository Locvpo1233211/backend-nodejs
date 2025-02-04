require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./route/web");
configViewEngine(app);

app.use("/test123", webRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
