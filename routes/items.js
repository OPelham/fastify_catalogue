'use strict'

const dbConnector = require("../plugins/db-connector")
const { requireModule } = require("fastify-cli/util")
const itemSchema = require("../routeOptions/schemas/itemSchema")
const itemHandler = require("../routeOptions/routeHandlers/itemsHandler")

/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection('catalogue_collection')

  fastify.get('/items', itemSchema.getAllItemRequestSchema, async function (request, reply) {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No document found')
    }
    return result
  })

  // fastify.get('/items', itemHandler)

  fastify.get('/items/:id', itemSchema.getItemByIdRequestSchema, async (request, reply) => {
    const result = await collection.findOne({ _id: fastify.mongo.ObjectId(request.params.id) })
    if (!result) {
      throw new Error('No item found with this id')
    }
    return result
  })

  fastify.post('/items', itemSchema.addItemRequestSchema, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({
      itemType: request.body.itemType,
      itemName: request.body.itemName
    })
    return result
  })

  fastify.delete('/items/:id', itemSchema.deleteItemByIdRequestSchema, async (request, reply) => {
    const result = await collection.deleteOne({ _id: fastify.mongo.ObjectId(request.params.id) })
    if (!result) {
      throw new Error('No item found with this name')
    }
    return result
  })

  fastify.put('/items/:id', itemSchema.updateItemRequestSchema, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.updateOne(
      { _id: fastify.mongo.ObjectId(request.params.id) },
      {
        $set:
        {
          itemType: request.body.itemType,
          itemName: request.body.itemName
        }
      })
    return result
  })
}

module.exports = routes