import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'insurancePaid',
    headerName: 'Insurance Paid',
    width: 200,
  },
  {
    field: 'insurancePlan',
    headerName: 'Insurance Plan',
    width: 200,
    editable: false,
  },
  {
    field: 'insurrer',
    headerName: 'Radiant',
    width: 200,
    editable: false,
  },
  {
    field: 'amountTopay',
    headerName: 'Amount To Pay',
    width: 200,
    editable:false
    
  },
  {
    field: 'amountPaid',
    headerName: 'Amount Paid',
    width: 200,
    editable:false
    
  },
   {
    field: 'remaining',
    headerName: 'Remaining',
    width: 200,
    editable:false,
    
  },
];

const rows = [
  { id: 1, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: "Radiant",amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 2, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 3, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 4, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 5, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining: '40,000Rwf'},
  { id: 6, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining: '40,000Rwf'},
  { id: 7, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 8, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 9, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 10, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 11, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 12, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 13, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining: '40,000Rwf'},
  { id: 14, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining: '40,000Rwf'},
  { id: 15, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 16, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
  { id: 17, insurancePlan: 'Third Party Only', insurancePaid: 'MOTOR Insurance', insurrer: 'Radiant',amountTopay:'120,000Rwf',amountPaid:'80,000Rwf',remaining:'40,000Rwf' },
];

export default function TransactionTable() {
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
