const express = require('express')
const recipesRouter = require('./Recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/Recipes', recipesRouter)

module.exports = server