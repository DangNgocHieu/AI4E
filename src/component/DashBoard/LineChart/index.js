import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Horizontal
} from 'recharts';
const data = [
  {
    name: 'Lê ngu si',  'Chi nhánh trung tâm': 4000, 
  },
  {
    name: '02',  'Chi nhánh trung tâm': 19091, 
  },
  {
    name: '03',  'Chi nhánh trung tâm': 26370, 
  },
  {
    name: '04',  'Chi nhánh trung tâm': 1000, 
  },
  {
    name: '04',  'Chi nhánh trung tâm': 12663, 
  },
  {
    name: '04',  'Chi nhánh trung tâm': 5000, 
  },
  {
    name: '04',  'Chi nhánh trung tâm': 12663, 
  },

  {
    name: '05',  'Chi nhánh trung tâm': 13000, 
  },
  {
    name: '06',  'Chi nhánh trung tâm': 10374, 
  }
  
];

export default class LineChart extends PureComponent {

  render() {
    return (
      <BarChart
        width={350}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" width='90px' />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="rgb(0, 148, 218)" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="Chi nhánh trung tâm" fill="rgb(0, 148, 218)"  />
        </BarChart>
    );
  }
}