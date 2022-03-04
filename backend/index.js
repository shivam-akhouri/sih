const express = require("express")

const app = express();
app.get("/", (req, res)=>{
    res.send("hello sih");
})
app.listen(8000);