import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'subscription',
    headerName: 'Subscription',
    width: 200,
  },
  {
    field: 'provider',
    headerName: 'Provider',
    width: 200,
  },
  {
    field: 'subscriptionDetail',
    headerName: 'Subscrtiption Detail',
    width: 200,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 200,
    editable:false
    
  },
  {
    field: 'remainingTime',
    headerName: 'Remaining Time',
    width: 250,
    editable: false,
  },
  {
    field: 'renew',
    headerName: 'Renew Subscription',
    width: 200,
    editable:false,
    renderCell:(params) => {
      return (
        <button className="renew_insuranceBtn">Renew</button>
      )
    }
    
  },
];

const rows = [
  { id: 1,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: "14.000Rwf",remainingTime:'1Month 3days',renew:'' },
  { id: 2,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 3,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 4,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 5,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew: ''},
  { id: 6,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew: ''},
  { id: 7,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 8,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 9,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 10,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 11,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 12,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 13,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew: ''},
  { id: 14,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew: ''},
  { id: 15,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 16,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
  { id: 17,subscription: 'TV' ,provider: 'Canal+', subscriptionDetail: 'Basic Bouquet', price: '14.000Rwf',remainingTime:'1Month 3days',renew:'' },
];

export default function MySubscribtionTable() {
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
