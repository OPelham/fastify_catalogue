'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.redirect('https://opelham.github.io/fastify_catalogue/')
  })
}
