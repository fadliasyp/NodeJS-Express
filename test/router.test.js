import express from "express";
import  request  from "supertest";

const app = express()
const router = express.Router()

router.use((req, res, next) => {
    console.info(`receive request ${req.originalUrl}`)
    next()
})

router.get('/feature/a', (req, res) =>{
    res.send('feature a')
})

// ini tidak jalan karna tidak di app.use(router)
test('test router disabled', async() => {
    const response = await request(app).get('/feature/a')
    expect(response.status).toBe(404)
})


test('test router disabled', async() => {
    // agar jalan pakai app.use(router)
    app.use(router)
    const response = await request(app).get('/feature/a')
    expect(response.text).toBe('feature a')
})
