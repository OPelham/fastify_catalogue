'use strict'

const getAllItemsHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const items = await collection.find().toArray()
    reply.send({
        success: true,
        "number of results": items.length,
        items
    })
}

const getItemByIdHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const item = await collection.findOne({ _id: this.mongo.ObjectId(request.params.id) })
    if (!item) {
        throw new Error('No item found with this id')
    }
    reply.send({
        success: true,
        "number of results": item.length,
        item
    })
}

const addItemHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const result = await collection.insertOne({
        itemType: request.body.itemType,
        itemName: request.body.itemName
    })
    reply.send({
        success: result.acknowledged,
        insertedItem: {
            _id: result.insertedId,
            itemType: request.body.itemType,
            itemName: request.body.itemName
        }
    })
}

const deleteItemByIdHandler = async function (request, reply) {
    const collection = this.mongo.db.collection('catalogue_collection')
    const result = await collection.deleteOne({ _id: this.mongo.ObjectId(request.params.id) })
    if (result.deletedCount === 0) {
        throw new Error('No item found with this id')
    }
    reply.send({
        success: result.acknowledged,
        "number of items deleted": result.deletedCount
    })
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
    if (result.matchedCount === 0) {
        throw new Error('No item found with this id')
    }
    if (result.modifiedCount === 0) {
        throw new Error('No change detected')
    }
    reply.send({
        success: result.acknowledged,
        "number of items updated": result.modifiedCount
    })
}

module.exports = {
    getAllItemsHandler,
    getItemByIdHandler,
    addItemHandler,
    deleteItemByIdHandler,
    updateItemByIdHandler
}