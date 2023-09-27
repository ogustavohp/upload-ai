import { fastify } from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoutes } from './routes/upload-video'

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! http://localhost:3333/')
  })
