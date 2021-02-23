import React, { useEffect } from "react";
import createTreeData from "../utils/TreeData";
import "./Hierarchy.css";
import TreeUL from "./TreeUL";

function Hierarchy({ employees }) {
  const sortData = employees.sort((a, b) => a.id - b.id);
  const OrgTree = createTreeData(sortData);

  return (
    <div data-testid="OrgView" id="OrgView">
      {OrgTree.map((emp, id) => {
        return <TreeUL key={id} data={emp} />;
      })}
    </div>
  );
}

export default Hierarchy;
