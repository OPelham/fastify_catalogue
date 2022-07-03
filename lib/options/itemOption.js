'use string'
const itemSchema = require("../schemas/itemSchema")
const itemHandler = require("../routeHandlers/itemsHandler")

const getItemByIdOptions = {
    schema: itemSchema.getItemByIdRequestSchema,
    handler: itemHandler.getItemByIdHandler 
}

const getAllItemsOptions = {
    schema: itemSchema.getAllItemRequestSchema,
    handler: itemHandler.getAllItemsHandler 
}

const addItemOptions = {
    schema: itemSchema.addItemRequestSchema,
    handler: itemHandler.addItemHandler
}

const deleteItemByIdOptions = {
    schema: itemSchema.deleteItemByIdRequestSchema,
    handler: itemHandler.deleteItemByIdHandler
}

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