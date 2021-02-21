import createTreeData from '../TreeData';
import TreeView from '../TreeView';
import {EmployeeData} from '../../fixtures/Employee';

describe('Render tree structure', () => {
  test('Tree structure', () => {
    const treeData = createTreeData(EmployeeData)
    const view = TreeView(treeData,document.querySelector('#OrgView'));
    console.log(view);
    expect(treeData[0]['name']).toBe('Jamie')
    expect(treeData.length).toBe(1)
  })
})