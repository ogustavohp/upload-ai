import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoutes } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
  origin: '*', // Mudar para o endereço de onde o front-end vai estar
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! http://localhost:3333/')
  })
