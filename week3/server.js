const express = require("express");
const uuid = require("uuid");
const app = express();
app.use(express.json())
const teams = [{
        id: uuid.v4(),
        recycledItems: "Mercedes",
        description: "Cardboard",
        recyclable:true,
        quantity:7,
        price_per_unit:10
    }, {
        id: uuid.v4(),
        recycledItems: "McLaren",
        description: "Mixed Paper",
        recyclable:true,
        quantity:5,
        price_per_unit:10
    }, {
    id: uuid.v4(),
        recycledItems: "Alfa Romeo",
        description: "Metal",
        recyclable:true,
        quantity:5,
        price_per_unit:10
    }, {
    id: uuid.v4(),
        recycledItems: "Ferrari",
        description: "Glass",
        recyclable:true,
        quantity:5,
        price_per_unit:10
    }, {
    id: uuid.v4(),
        recycledItems: "Red Bull",
        description: "Plastic",
        recyclable:true,
        quantity:5,
        price_per_unit:10
    }]

app.get("/teams", (req, res) => {
    res.send(teams);
})
app.post("/teams", (req, res) => {
    const newTeam = {
        id: uuid.v4(),
        name: req.body.name, 
        description: req.body.description,
        recyclable:req.body.recyclable,
        quantity:req.body.quantity,
        price_per_unit:req.body.price_per_unit
      }
    teams.push(newTeam)
    res.send(newTeam);
})

app.listen(8000, () => {
    console.log("the server is running on 8000")
})