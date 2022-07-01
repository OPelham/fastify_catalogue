'use strict'

// const { requireModule } = require("fastify-cli/util")

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('catalogue_collection')

  fastify.get('/items', async function (request, reply) {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No document found')
    }
    return result
  })

  // fastify.get('/items/:id', async (request, reply) => {
  //   const result = await collection.findOne({ "_id": request.params.id })
  //   if (!result) {
  //     throw new Error('No item found with this name')
  //   }
  //   return result
  // })

  const itemRequestBodyJsonSchema = {
    type: 'object',
    required: ['itemType', 'itemName'],
    properties: {
      itemType: { type: 'string' },
      itemName: { type: 'string' }
    },
  }

  const schema = {
    body: itemRequestBodyJsonSchema,
  }

  fastify.post('/items', { schema }, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({
      itemType: request.body.itemType,
      itemName: request.body.itemName
    })
    return result
  })
}

module.exports = routes