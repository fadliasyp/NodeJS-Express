import express from 'express'
import request  from 'supertest'

const app = express()


// RESPONSE HEADER
app.get('/', (req, res) => {
    res.set({
        'accept' : 'fadli'
    }).end()
})

test('test respon header', async () => {
    const response = await request(app).get('/')
    expect(response.get('accept')).toBe('fadli')
})



// REQUEST HEADER
app.get('/about', (req, res) => {
    const type = req.get('accept')
    res.send(`hello ${type}`)
})

test('test request header', async() => {
    const response =  await request(app).get('/about').set('accept', 'fadli')
    expect(response.text).toBe('hello fadli')
})
