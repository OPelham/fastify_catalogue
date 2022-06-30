'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/docs', async function (request, reply) {
    return 'swagger doc will show here'
  })
}