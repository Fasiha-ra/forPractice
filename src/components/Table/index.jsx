import React from "react";

const Table = ({ columns, rows }) => {
  if (!columns || !rows || rows.length === 0) return <p>No data available</p>;

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} style={{ border: "1px solid #ccc", padding: "8px" }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
