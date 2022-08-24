const express = require("express");
const app = express();

const teams = [
    {constructor: "Mercedes"},
    {constructor: "McLaren"},
    {constructor: "Alfa Romeo"},
    {constructor: "Ferrari"},
    {constructor: "Red Bull"}]

    app.get("/teams", (req, res) => {
        res.send(teams);
    })


const drivers = [
     {Driver: "Lewis Hamilton"},
     {Driver: "Daniel Ricciaro"},
     {Driver: "Valtteri Bottas"},
     {Driver: "Charles Leclerc"},
     {Driver: "Max Verstappen"}] 

app.get("/drivers", (req, res) => {
        res.send(drivers);
    })


const chiefs = [
     {Team_Chief: "Toto Wolff"},
     {Team_Chief: "Andreas Seidl"},
     {Team_Chief: "Frédéric Vasseur"},
     {Team_Chief: "Mattia Binotto"},
     {Team_Chief: "Christian Horner"}] 
     
app.get("/chiefs", (req, res) => {
        res.send(chiefs);
    })



app.listen(8000, () => {
        console.log("the server is running on 8000")
    } )