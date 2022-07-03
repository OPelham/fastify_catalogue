'use strict'

const { requireModule } = require("fastify-cli/util")
// const itemSchema = require("../routeOptions/schemas/itemSchema")
// const itemHandler = require("../routeOptions/routeHandlers/itemsHandler")
const itemOption = require("../lib/options/itemOption")
/**
 * A plugin that provide encapsulated routes
 * @param {FastifyInstance} fastify encapsulated fastify instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify, options) {

  // routes (long form)
  // fastify.route({
  //   method: 'GET',
  //   url: '/items',
  //   schema: itemSchema.getAllItemRequestSchema,
  //   handler: itemHandler.getAllItemsHandler
  //   // handler: getAllItemsHandler
  // })

  // fastify.route({
  //   method: 'GET',
  //   url: '/items/:id',
  //   schema: itemSchema.getItemByIdRequestSchema,
  //   handler: itemHandler.getItemByIdHandler
  //   // handler: getItemByIdHandler
  // })

  // fastify.route({
  //   method: 'POST',
  //   url: '/items',
  //   schema: itemSchema.addItemRequestSchema,
  //   handler: itemHandler.addItemHandler
  //   // handler: addItemHandler
  // })

  // fastify.route({
  //   method: 'DELETE',
  //   url: '/items/:id',
  //   schema: itemSchema.deleteItemByIdRequestSchema,
  //   handler: itemHandler.deleteItemByIdHandler
  //   // handler: deleteItemByIdHandler
  // })

  // fastify.route({
  //   method: 'PUT',
  //   url: '/items/:id',
  //   schema: itemSchema.UpdateItemByIdRequestSchema,
  //   handler: itemHandler.updateItemByIdHandler
  //   // handler: updateItemByIdHandler
  // })

  //routes (short form)
  fastify.get('/items', itemOption.getAllItemsOptions)

  fastify.get('/items/:id', itemOption.getItemByIdOptions)

  fastify.post('/items', itemOption.addItemOptions)

  fastify.delete('/items/:id', itemOption.deleteItemByIdOptions)

  fastify.put('/items/:id', itemOption.updateItemOptions)
}

module.exports = routes