'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/items', async function (request, reply) {
    return 'this is an items example'
  })
}
