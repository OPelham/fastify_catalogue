'use strict'

const getAllItemsHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const result = await collection.find().toArray()
    if (result.length === 0) {
        throw new Error('No document found')
    }
    return result
}

const getItemByIdHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const result = await collection.findOne({ _id: this.mongo.ObjectId(request.params.id) })
    if (!result) {
        throw new Error('No item found with this id')
    }
    return result
}

const addItemHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    return await collection.insertOne({
        itemType: request.body.itemType,
        itemName: request.body.itemName
    })
   
}

const deleteItemByIdHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const result = await collection.deleteOne({ _id: this.mongo.ObjectId(request.params.id) })
    if (!result) {
        throw new Error('No item found with this name')
    }
    return result
}

const updateItemByIdHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const result = await collection.updateOne(
        { _id: this.mongo.ObjectId(request.params.id) },
        {
            $set:
            {
                itemType: request.body.itemType,
                itemName: request.body.itemName
            }
        })
    return result
}

module.exports = {
    getAllItemsHandler,
    getItemByIdHandler,
    addItemHandler,
    deleteItemByIdHandler,
    updateItemByIdHandler
}