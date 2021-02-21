import createTreeData from "../TreeData";
import TreeView from "../TreeView";
import { render, cleanup, waitFor, act } from "@testing-library/react";
import { EmployeeData } from "../../fixtures/Employee";
afterEach(() => {
  cleanup;
  jest.resetAllMocks();
});
describe("Render tree structure", () => {
  test("Tree structure", () => {
    const treeData = createTreeData(EmployeeData);
    const view: HTMLUListElement = TreeView(
      treeData,
      document.querySelector("#OrgView")
    );
    expect(view.innerHTML).toBe(
      "<li><span>Jamie</span><ul><li><span>Alan</span><ul><li><span>Martin</span></li><li><span>Alex</span></li></ul></li><li><span>Steve</span><ul><li><span>David</span></li></ul></li></ul></li>"
    );
  });
});
