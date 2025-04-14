const express = require('express')
const recipesRouter = require('')
const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)
