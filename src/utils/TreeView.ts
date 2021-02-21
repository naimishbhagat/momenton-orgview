export function getInnerDepth(items){
  console.log(items)
  let index = 1
  items.forEach(item=>{
    if(item.children && item.children.length >0){
      index+=item.children.length;
    }
  })
  return index;
}
function TreeView(items, parent, depth,index:number) {
  if(parent){
    items.forEach(function(item) {      
      let row = document.createElement('tr')
      for(let i=0;i<depth;i++){
        let cell = document.createElement('td')
        if(index == i){
          let cellText = document.createTextNode(item.name)
          cell.appendChild(cellText);      
        }
        row.appendChild(cell)
        
      }
      parent.appendChild(row) 
      if (item.children && item.children.length>0){
        console.log(index,item.children.length)
        if(item.children.length > index){
          index++;
        }
        TreeView(item.children,parent,depth,index);
      }
      
      // let cell1 = document.createElement('td')
      // let cell2 = document.createElement('td')
      // let cell3 = document.createElement('td')
      // let cellText = document.createTextNode(item.name)
        
      // if(index == 0){
      //   cell1.appendChild(cellText);
      // }
      // if(index == 1){
      //   cell2.appendChild(cellText);
      // }
      // if(index == 2){
      //   cell3.appendChild(cellText);
      // }
      // row.appendChild(cell1)
      // row.appendChild(cell2)
      // row.appendChild(cell3)
      // parent.appendChild(row)
      
                
    })   
  }
}
 
export default TreeView
