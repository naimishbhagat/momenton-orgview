import React from "react";
import Hierarchy from "../Hierarchy";
import { EmployeeData } from "../../fixtures/Employee";
import { render, cleanup, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getEmployeeData, EmployeeType } from "../../services/employeeApi";

test("renders organisation structure correctly", async () => {
  await act(async () => {
    const { getByTestId } = render(<Hierarchy employees={EmployeeData} />);
    console.log(getByTestId);
    await waitFor(() => [expect(getByTestId("OrgView")).toBeInTheDocument()]);
  });
});

test("Fetch Employeedata correctly", async () => {
  await act(async () => {
    const { getByText } = render(<Hierarchy employees={EmployeeData} />);
    console.log(getByText);
    await waitFor(() => [expect(getByText("Jamie")).toBeInTheDocument()]);
  });
});
