import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'insurancename',
    headerName: 'Insurance Name',
    width: 200,
  },
  {
    field: 'insurer',
    headerName: 'Insurer',
    width: 150,
    editable: false,
  },
  {
    field: 'insureditem',
    headerName: 'Insured Item Detail',
    width: 200,
    editable: false,
  },
  {
    field: 'coverage',
    headerName: 'Coverage',
    width: 160,
    editable:false
    
  },
  {
    field: 'remainingTime',
    headerName: 'Remaining Time',
    width: 200,
    editable:false
    
  },
   {
    field: 'renew',
    headerName: 'Renew Insurance',
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
  { id: 1, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: "Toyota",coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 2, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 3, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 4, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 5, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew: ''},
  { id: 6, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew: ''},
  { id: 7, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 8, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 9, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 2, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 3, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 4, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 5, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew: ''},
  { id: 6, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew: ''},
  { id: 7, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 8, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
  { id: 9, insurer: 'Radiant', insurancename: 'Motor Insurance', insureditem: 'Toyota',coverage:'Third Party Only',remainingTime:'3 Months',renew:'' },
];

export default function Table() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        disableSelectionOnClick
      />
    </div>
  );
}
