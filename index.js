const PORT = 5000;
const express = require('express');
const patch = require("path")
const apiRoute = require("./routes/api")

const app = express();

app.use('/api', apiRoute);
app.use('/',express.static(patch.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("Server runing on port", PORT);
})



