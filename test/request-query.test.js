import express  from "express";
import request  from "supertest";

const app = express()

app.get('/', (req, res) => {
    res.send(`hello ${req.query.firstname} ${req.query.lastname}`)
})

test('test query parameter', async () => {
    const response = await request(app).get('/').query({firstname: 'eko', lastname: 'kurniawan'})
    expect(response.text).toBe('hello eko kurniawan')
})

// test('fadliii2', async() => {
//     const response = await request(app).get('/').query({name: 'eko'})
//     expect(response.text).toBe('hello eko')
// })
 
