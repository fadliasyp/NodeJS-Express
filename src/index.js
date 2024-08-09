import express from 'express'
import Request  from 'supertest'

const app = express()


app.get( '/',(req, res)=> {
    res.send('hello world')
})
app.get( '/eko',(req, res)=> {
    res.send('hello eko')
})

app.listen(3000, ()=> {
    console.log('serer is okay')
})



