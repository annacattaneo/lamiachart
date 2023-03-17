export const dimensions = [
  {
    id: 'name',
    name: 'Name',
    validTypes: ['string'],
    required: true,
    operation: 'get',
  },

  {
    id: 'size',
    name: 'Size',
    validTypes: ['number'],
    require: false,
    operation: 'get',
    multiple: false,
  }
]
