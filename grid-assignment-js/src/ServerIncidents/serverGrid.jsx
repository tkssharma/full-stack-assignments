import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './serverIncientsGrid.css';
// take this line out if you do not want to use ag-Grid-Enterprise
import 'ag-grid-enterprise';
import ContainerContext from '../context/containerContext';

class PurchaseGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: 'purchase in $',
          field: 'purchase',
          width: 150,
          resizable: true,
        },
        {
          headerName: 'shopping',
          field: 'shopping',
          resizable: true,
          width: 200,
          filter: 'agNumberColumnFilter',
        },
        {
          headerName: 'Date',
          field: 'date',
          width: 305,
          filter: 'agDateColumnFilter',
        },
        {
          headerName: 'Country',
          field: 'country',
          resizable: true,
          width: 200,
        },
        {
          headerName: 'Year',
          field: 'year',
          width: 200,
        },
      ],
      defaultColDef: { filter: true },
      rowData: this.props.data,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({
        rowData: nextProps.data,
      });
    }
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

PurchaseGrid.contextType = ContainerContext;

export default PurchaseGrid;
