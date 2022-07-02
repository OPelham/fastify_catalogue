'use strict'

// Handlers for routes. handles database conections and schemas
const dbConnector = require("../../plugins/db-connector")

/**
 * A plugin that provides route handling
 * @param {FastifyInstance} fastify encapsulated fastify instance
 */
async function itemsController(fastify) {
  const collection = fastify.mongo.db.collection('catalogue_collection')

  //   getItems = async (request, reply) {
  //     const result = await collection.find().toArray()
  //     if (result.length === 0) {
  //       throw new Error('No document found')
  //     }
  //     return result
  //   }

  //   getItemById = async (request, reply) {
  //     const result = await collection.findOne({ id: request.params._id })
  //     if (!result) {
  //       throw new Error('No item found with this name')
  //     }
  //     return result
  //   }
  // }
  // module.exports = itemsController.getItems

  const getItemHandler = async (request, reply) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error('No document found')
    }
    return result
  }

}

module.exports = itemsController.getItemHandler