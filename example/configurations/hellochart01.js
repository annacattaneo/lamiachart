import hellochart from 'customcharts/hellochart'
import data from '../datasets/hello.csv'

export default {
  chart: hellochart,
  data,
  dataTypes: {
    //name_col,v1_col,v2_col,type,v3_col
    name_col: 'string',
    v1_col: 'number',
    v2_col: 'number',
    type: 'string',
    v3_col: 'number',
  },
  mapping: {
    name: { value: ['name_col'] },
    size: { value: ['v3_col']},
  },
  visualOptions: {
    color: 'green'
  },
}
