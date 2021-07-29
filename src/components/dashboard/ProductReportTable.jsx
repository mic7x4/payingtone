import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
  },
  {
    field: 'productPaid',
    headerName: 'Product Paid',
    width: 200,
  },
  {
    field: 'productModel',
    headerName: 'Product Model',
    width: 200,
    editable: false,
  },
  {
    field: 'shopSelling',
    headerName: 'Shop Selling',
    width: 250,
    editable: false,
  },
  {
    field: 'amountPaid',
    headerName: 'Amount Paid',
    width: 200,
    editable:false
    
  },
  {
    field: 'payer',
    headerName: 'Payer',
    width: 200,
    editable:false
    
  },
];

const rows = [
  { id: 1,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: "LoopBackTech",amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 2,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 3,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 4,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 5,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer: 'Bank of Kigali'},
  { id: 6,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer: 'Bank of Kigali'},
  { id: 7,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 8,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 9,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 10,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 11,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 12,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 13,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer: 'Bank of Kigali'},
  { id: 14,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer: 'Bank of Kigali'},
  { id: 15,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 16,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
  { id: 17,date: '26-07-2021' ,productPaid: 'HP-Elite Pro', productModel: 'Folio-1440', shopSelling: 'LoopBackTech',amountPaid:'120,000Rwf',payer:'Bank of Kigali' },
];

export default function ProductReportTable() {
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
