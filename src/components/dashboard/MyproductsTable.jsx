import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import phone1 from '../../assets/images/phone1.jpg'

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
  },
  {
    field: 'productName',
    headerName: 'Product Version',
    width: 200,
  },
  {
    field: 'productVersion',
    headerName: 'Product Model',
    width: 200,
    editable: false,
  },
  {
    field: 'productPrice',
    headerName: 'Product Price',
    width: 250,
    editable: false,
  },
  {
    field: 'image',
    headerName: 'image',
    width: 200,
    editable:false,
    renderCell:(params) => {
      return (
        <div className="myproduct__img">
            <img src={phone1} alt="" />
        </div>
      )
    }
    
  }
];

const rows = [
  { id: 1,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: "120,000Rwf",image:'' },
  { id: 2,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:'' },
  { id: 3,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:'' },
  { id: 4,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:'' },
  { id: 5,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 6,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 7,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:'' },
  { id: 8,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 9,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 10,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 11,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 12,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 13,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 14,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 15,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 16,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
  { id: 17,date: '26-07-2021' ,productName: 'Apple Iphone', productVersion: '12 Pro Max', productPrice: '120,000Rwf',image:''},
];

export default function MyproductsTable() {
  return (
    <div style={{ height: 600, width: '100%%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        disableSelectionOnClick
      />
    </div>
  );
}
