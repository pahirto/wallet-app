import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button, ButtonGroup } from "reactstrap";
import TransactionDataServiceMock from "../../mockingDataService/TransactionDataServiceMock";

const TransactionTable = ({ data }) => {
  const [_data, modifyData] = useState(data); //ASK - data vs _data

  return (
    <div>
      {/* https://medium.freecodecamp.org/how-to-build-a-real-time-editable-datagrid-in-react-c13a37b646ec */}
      <ReactTable
        data={_data}
        columns={[
          {
            Header: "Datum",
            accessor: "date",
            Footer: "footer"
          },
          {
            Header: "Nazev",
            accessor: "label"
          },
          {
            Header: "Castka",
            id: "trans_table_cols_amount",
            accessor: "amount",
            Cell: ({ value }) => <div>{value},-</div>
          },
          {
            Header: "Akce",
            id: "trans_table_cols_action",
            accessor: () => (
              <ButtonGroup>
                <Button>-</Button>
                <Button>edit</Button>
              </ButtonGroup>
            )
          }
        ]}
        defaultPageSize={10}
      />
    </div>
  );
};

export default TransactionTable;
