import express from "express";
import  request  from "supertest";
import cookieParser from "cookie-parser";

const app = express()
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res)=>{
    const name = req.cookies['name']
    res.send(`hello ${name}`)
})

app.post('/login', (req, res) => {
    const name = req.body.name;
    res.cookie("Login", name, {path: '/'})
    res.send(`hello ${name}`);
})

test('test read cookie', async()=> {
    const response = await request(app).get('/')
    .set('Cookie', 'name=fadli; author=fadliAsyp')
    expect(response.text).toBe('hello fadli')
})

test('test cookie write', async () => {
    const response = await request(app).post('/login')
    .send({name: 'eko'})

    expect(response.get("Set-Cookie").toString()).toBe("Login=eko; Path=/")
    expect(response.text).toBe('hello eko')
})