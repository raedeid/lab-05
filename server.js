'use strict'

const express = require('express');
const server = express();

const PORT = process.env.PORT || 3300;

server.listen(PORT , (request,response) =>{
    console.log('listen at PORT 3300');
})

server.get('/begain',(request , response)=>{
    response.send(200).send('its work');
} )

server.use(express.static(('./puplic')));