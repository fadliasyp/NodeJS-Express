import express from "express";
import  request  from "supertest";

const app = express()

app.get('/', (req, res)=>{
    if(req.query.name){
        res.status(200).send(`hello ${req.query.name}`)
    } else{
        res.status(400).end()
    }
})

test('response test', async()=> {
    let response = await request(app).get('/').query({name: 'fadli'})
    expect(response.text).toBe('hello fadli')
    expect(response.status).toBe(200)

    response = await request(app).get('/')
    expect(response.status).toBe(400)
})



app.get('/about', (req, res) => {
    if(req.query.name){
        res.send(`hello ${req.query.name}`).status(200)
    } else {
        res.status(404).end()
    }
})

test('kakaka', async() => {
    let response = await request(app).get('/about')
    expect(response.status).toBe(404)

    response = await request(app).get('/about').query({name: 'fadli'})
    expect(response.text).toBe('hello fadli')
    expect(response.status).toBe(200)
})
