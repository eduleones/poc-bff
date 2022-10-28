const fastify = require('fastify')({ logger: true })
const makeOrders = require('./factories').makeOrders

// Declare a route
fastify.get('/orders', async (request, reply) => {
  return await makeOrders(30)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()