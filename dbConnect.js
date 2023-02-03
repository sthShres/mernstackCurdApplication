const mongoose = require('mongoose')

const URL = 'mongodb+srv://donshers:donshres@cluster0.qsd1rlq.mongodb.net/brain-beam'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected', ()=>{
    console.log('Mongo Db connection sucessful')
})

connectionObj.on('error', ()=>{
    console.log('Mongo Db connection Failed')
})