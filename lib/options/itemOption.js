'use string'
const itemSchema = require("../schemas/itemSchema")
const itemHandler = require("../routeHandlers/itemsHandler")

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const getItemByIdOptions = {
    schema: itemSchema.getItemByIdRequestSchema,
    handler: itemHandler.getItemByIdHandler 
}

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const getAllItemsOptions = {
    schema: itemSchema.getAllItemRequestSchema,
    handler: itemHandler.getAllItemsHandler 
}

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const addItemOptions = {
    schema: itemSchema.addItemRequestSchema,
    handler: itemHandler.addItemHandler
}

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const deleteItemByIdOptions = {
    schema: itemSchema.deleteItemByIdRequestSchema,
    handler: itemHandler.deleteItemByIdHandler
}

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const updateItemOptions = {
    schema: itemSchema.updateItemRequestSchema,
    handler: itemHandler.updateItemByIdHandler 
}

module.exports = { 
    getAllItemsOptions,
    addItemOptions, 
    getItemByIdOptions,
    deleteItemByIdOptions,
    updateItemOptions
}