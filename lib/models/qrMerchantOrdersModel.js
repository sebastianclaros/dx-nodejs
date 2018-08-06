module.exports = {
  additionalProperties: false,
  properties: {
    external_reference: {
      type: 'string'
    },
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          currency_id: {
            type: 'string',
            maxLength: 3
          },
          unit_price: {
            type: 'number'
          },
          quantity: {
            type: 'integer'
          },
        }
      }
    }
  }
};