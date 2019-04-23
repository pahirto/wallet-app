import React from "react";

const Table = ({ data, columns }) => {
  const filterableCols = columns.filter(({ filterable }) => filterable);

  const tableBody = data
    .filter(
      row =>
        filterableCols.filter(({ accessor, filterMethod }) =>
          filterMethod(row[accessor])
        ).length === filterableCols.length
    )
    .map((row, key) => (
      <tr key={key}>
        {columns.map(({ accessor, Cell = val => (val) }, key) => 
                (<td key={key}>{Cell(row[accessor])}</td>)
        )}
      </tr>
    ));
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ Header }, key) => (
            <th key={key}>{Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Table;
