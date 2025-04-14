const express = require('express')
const recipesRouter = require('./Recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/Recipes', recipesRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up' })
})

module.exports = server