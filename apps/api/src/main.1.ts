import 'reflect-metadata'
import enableDI from './app/container/bootstrap'
import createServer from './app/server'
import log from './app/logger'

const run = async () => {
  enableDI()
  try {
    const server = await createServer()
    const { url } = await server.listen({ port: 3000 })
    log.info(`🚀 Server ready at ${url}`)
  } catch (e) {
    log.error(e)
  }
}

run()