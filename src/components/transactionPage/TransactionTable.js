import React, { useState } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Button, ButtonGroup } from "reactstrap";
import TransactionDataServiceMock from "../../mockingDataService/TransactionDataServiceMock";
import FilterComboBox from "./FilterComboBox";

const TransactionTable = ({ data }) => {
  const [state, setState] = useState({
    data: data,
    labelInputLabel: "Nazev"
  }); //ASK - data vs _data

  const filterAmountMethod = (filter, row) => {
    if (filter.value === "income") {
      return row[filter.id] >= 0;
    }
    if (filter.value === "outcome") {
      return row[filter.id] <= 0;
    }
    return true;
  };

  const amountFilter = ({ filter, onChange }) => (
    <FilterComboBox
      filter={filter}
      onChange={onChange}
      defaultValue="all"
      values={[
        { value: "all", label: "Vse" },
        { value: "income", label: "Prijmy" },
        { value: "outcome", label: "Vydaje" }
      ]}
    />
  );

  const actionButtons = () => (
    <ButtonGroup>
      <Button>-</Button>
      <Button>edit</Button>
    </ButtonGroup>
  );

  return (
    <div>
      {/* https://medium.freecodecamp.org/how-to-build-a-real-time-editable-datagrid-in-react-c13a37b646ec */}
      <ReactTable
        data={state.data}
        defaultPageSize={10}
        columns={[
          {
            Header: "Datum",
            accessor: "date",
            Footer: "footer"
          },
          {
            Header: "Nazev",
            accessor: "label",
            Footer: () => (
              <input
                value={state.labelInputLabel}
                type="text"
                onChange={event =>
                  setState({ labelInputLabel: event.target.value })
                }
              />
            )
          },
          {
            Header: "Castka",
            id: "trans_table_cols_amount",
            accessor: "amount",
            Cell: ({ value }) => <div>{value},-</div>,
            filterable: true,
            filterMethod: filterAmountMethod,
            Filter: amountFilter
          },
          {
            Header: "Akce",
            id: "trans_table_cols_action",
            accessor: actionButtons,
            Footer: () => <Button>+</Button>
          }
        ]}
      />
    </div>
  );
};

export default TransactionTable;
