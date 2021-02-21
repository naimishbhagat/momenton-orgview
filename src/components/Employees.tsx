import React, { useEffect, useState } from "react";
import { getEmployeeData } from "../services/employeeApi";
import Hierarchy from "./Hierarchy";

function Employees() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    setLoading(true);
    const data = await getEmployeeData();
    setLoading(false);
    return data;
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  if (loading) {
    return <div data-testid="employeeContainer">Loading</div>;
  }
  if (error) {
    return <div data-testid="employeeContainer">{error.message}</div>;
  }

  return (
    <div data-testid="employeeContainer">
      {data && data.length > 0 && <Hierarchy employees={data} />}
    </div>
  );
}

export default Employees;
