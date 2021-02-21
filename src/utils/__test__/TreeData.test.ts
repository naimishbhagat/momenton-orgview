import { EmployeeData } from "../../fixtures/Employee";
import createTreeData from "../TreeData";

describe("Build Tree object from data", () => {
  test("Trim validation", () => {
    const treeData = createTreeData(EmployeeData);
    expect(treeData[0]["name"]).toBe("Jamie");
    expect(treeData.length).toBe(1);
  });
});
