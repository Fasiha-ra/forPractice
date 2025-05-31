import React from "react";
import Header from "../shared/Header";
import Table from "../components/Table";

const Dashboard = () => {
  const columnHeaders = ["Name", "Age", "Status"];
  const tableData = [
    ["Alice", 25, "Active"],
    ["Bob", 30, "Inactive"],
    ["Charlie", 28, "Active"],
  ];
  return (
    <>
      <Header />
      <Table columns={columnHeaders} rows={tableData} />
    </>
  );
};

export default Dashboard;
