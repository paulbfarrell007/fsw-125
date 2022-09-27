const express = require("express")
const bountiesRouter = express.Router()
const uuid = require("uuid")

const bounties = [
    {
        fName: "Inde",
        lName: "Jones",
        living: false,
        bountyAmount: 5000,
        type: "Explorer",
        _id: uuid.v4()
    },
    {
        fName: "Henry",
        lName: "Jones",
        living: false,
        bountyAmount: 100000,
        type: "father",
        _id: uuid.v4()
    }
]

//get all
bountiesRouter.get("/", (req, res) => {
    res.send(bounties)
})
//get one
bountiesRouter.get("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const selectBounty = bounties.find(b => b._id === bountyID)
    res.send(selectBounty)
})
//post one
bountiesRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(newBounty)
})
//delete one
bountiesRouter.delete("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const bountyIndex = bounties.findIndex(b => b._id === bountyID)
    bounties.splice(bountyIndex, 1)
    res.send("BountyDel")
})
//update/change/put method
bountiesRouter.put("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(b => b._id === bountyID)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

module.exports = bountiesRouter