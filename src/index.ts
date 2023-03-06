import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { productRouter } from './router/productRouter'
import { userRouter } from './router/userRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${process.env.port}`)
})

app.use("/users", userRouter)
app.use("/products", productRouter)
