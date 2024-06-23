import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/ros', (c) => {
  return c.json({
    message: 'Test Hono API',
  })
})

export const GET = handle(app)
export const POST = handle(app)
export default app;