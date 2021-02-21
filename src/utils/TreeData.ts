import { EmployeeType } from "../services/employeeApi";

function createTreeData(data) {
  let tree :EmployeeType[]= [],
    object = {},
    parent,
    child;
  
  for (let i = 0; i < data.length; i++) {
    parent = data[i];
    object[parent.id] = parent;
    object[parent.id]["children"] = [];
  }

  for (let id in object) {
    if (object.hasOwnProperty(id)) {
      child = object[id]; 

      if (child.manager_id) {
        object[child["manager_id"]]["children"].push(child);
      } else {
        tree.push(child);
      }
    }
  }
  return tree;
}

export default createTreeData;