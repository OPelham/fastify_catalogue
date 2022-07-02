const itemRequestSchema = {
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

module.exports = { itemRequestSchema }

