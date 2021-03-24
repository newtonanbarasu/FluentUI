import React from 'react';
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';


const classNames = mergeStyleSets({
  table: {
    margin: 'auto',
  }
});

const operations = [
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 'INR 510',
    date: '20-03-2021',
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 'INR 100',
    date: '19-02-2021',
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 'INR 350',
    date: '18-01-2021',
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 'INR 900',
    date: '18-01-2021',
  },
  {
    from: '0000 0284 7529 4751 8475',
    to: '0980 9808 8200 7680',
    amount: 'INR 350',
    date: '17-01-2021',
  }
]

const columns = [
  { key: 'column1', name: 'From', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column2', name: 'To', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column3', name: 'Amount', fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true },
  { key: 'column4', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true },
]

const Table = () => {
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
        <DetailsList
          items={operations}
          columns={columns}
          selectionMode={0}
        />
      </div>
    </div>
  );
};

export default Table;