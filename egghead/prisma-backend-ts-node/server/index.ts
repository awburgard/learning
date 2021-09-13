import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'hi' })
})

app.get('/products', async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    include: {
      reviews: true,
    },
  })
  res.json({ products })
})

app.post(
  '/product',
  async (
    req: Request<{ name: string; description: string; price: number }>,
    res: Response
  ) => {
    const { name, description, price } = req.body
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
      },
    })

    res.json({ product })
  }
)
app.post(
  '/reviews',
  async (
    req: Request<{ text: string; rating: number; productId: string }>,
    res: Response
  ) => {
    const { text, rating, productId } = req.body
    const review = await prisma.reviews.create({
      data: {
        text,
        rating,
        product: {
          connect: {
            id: productId,
          },
        },
      },
    })

    res.json({ review })
  }
)

const PORT = 3001

app.listen(PORT)
console.log(`Listening on Port: ${PORT}`)
