const express = require('express');
const todoRouter = express.Router();
const {v4: uuid} = require('uuid');

let todos = [
    {name: "DJ",
        desc: "stream house music on twitch",
        isComplete: false,
        _id: uuid()
    },
                {name: "kittens",
                    desc: "play & feed my foster kittens",
                    isComplete: false,
                    _id: uuid()
    },
                            {name: "dragons",
                                desc: "watch house of the dragon",
                                isComplete: true,
                                _id: uuid()
    }
]

todoRouter
    .get('/', (req, res) =>{
        res.send(todos);
    })
        .get('/:theId', (req, res) =>{
            const theId = req.params.theId
            const filterID = todos.filter(e => e._id === theId)
            res.send(filterID)
    })
                .post('/', (req, res) =>{
                    const newInput = req.body
                    newInput._id = uuid()
                    todos.push(newInput)
                    res.send(newInput)
    })
                        .put('/:theId', (req,res) =>{
                            const renewId = req.params.theId
                            const renewTodos = todos.findIndex(e => e._id === renewId)
                            Object.assign(todos[renewTodos], req.body)
                            res.send(`${todos[renewTodos].name} modified`)
    })
                                    .delete('/:theId', (req, res) =>{
                                        const deleteId = req.params.theId
                                        const justDelete = todos.findIndex(e => e._id === deleteId)
                                        todos.splice(justDelete, 1)
                                        res.send(`${deleteId} dismissed`)
    })

module.exports = todoRouter;