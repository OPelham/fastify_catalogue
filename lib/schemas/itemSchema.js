const getAllItemRequestSchema = {
    schema: {
        response: {
            200: {
                type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            _id: {type: 'string'},
                            itemType: {type: 'string'},
                            itemName: {type: 'string'}
                        }
                    }
            }
        },
    }
};


const getItemByIdRequestSchema = {
    schema: {
        querystring: {
            id: { 
                type: 'string',
                minLength: 24,
                maxLength: 24
            },
            
        }
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         properties: {
    //             id: {type: 'string'},
    //             itemType: {type: 'string'},
    //             itemName: {type: 'string'}
    //         }
    //     }
    // }
};

const addItemRequestSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                itemType: {
                    type: 'string',
                    minLength: 1
                },
                itemName: {
                    type: 'string',
                    minLength: 1
                }
            },
            required: ['itemType', 'itemName'],
        },
        querystring: {
            id: { 
                type: 'string',
                minLength: 24,
                maxLength: 24
            },
            
        },
        // response: {
        //     200: {
        //         type: 'object',
        //         properties: {
        //             id: {type: 'string'},
        //             itemType: {type: 'string'},
        //             itemName: {type: 'string'}
        //         }
        //     }
        // }
    }
};

const deleteItemByIdRequestSchema = {
    schema: {
        querystring: {
            id: { 
                type: 'string',
                minLength: 24,
                maxLength: 24
            },
            
        }
    },
    // response: {
    //     200: {
    //         type: 'object',
    //         properties: {
    //             id: {type: 'string'},
    //             itemType: {type: 'string'},
    //             itemName: {type: 'string'}
    //         }
    //     }
    // }
};

const updateItemRequestSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                itemType: {
                    type: 'string',
                    minLength: 1
                },
                itemName: {
                    type: 'string',
                    minLength: 1
                }
            },
            required: ['itemType', 'itemName'],
        },
        querystring: {
            id: { 
                type: 'string',
                minLength: 24,
                maxLength: 24
            },
            
        },
        // response: {
        //     200: {
        //         type: 'object',
        //         properties: {
        //             id: {type: 'string'},
        //             itemType: {type: 'string'},
        //             itemName: {type: 'string'}
        //         }
        //     }
        // }
    }
};

module.exports = { 
    getAllItemRequestSchema,
    addItemRequestSchema, 
    getItemByIdRequestSchema,
    deleteItemByIdRequestSchema,
    updateItemRequestSchema
}

