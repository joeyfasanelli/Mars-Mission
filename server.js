const express = require("express");
const app = express();
app.listen(3000);

const missions = require("./missions.js")

app.get("/", (req, res)=> {
    res.render("index.ejs", {
        missions,
    });
});

app.get("/:id", (req, res)=>{
    res.render('missions_show.ejs', {
        missions: missions[req.params.id],
    });
});