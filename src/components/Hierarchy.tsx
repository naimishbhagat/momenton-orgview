import React,{useEffect} from 'react'
import createTreeData from '../utils/TreeData';
import TreeView from '../utils/TreeView';
import './Hierarchy.css'

function Hierarchy({employees}) {
    const sortData = employees.sort((a, b) => a.id - b.id);
    const employeeTree = createTreeData(sortData);
  
    useEffect(() => {       
       TreeView(employeeTree,document.querySelector('#OrgView'))
    }, []) 
 
    return <div data-testid="OrgView" id="OrgView"></div>
    
    
}

export default Hierarchy