function TreeView(items, parent) {
    let ul = document.createElement("ul");
    if (parent)
    parent.appendChild(ul);
    items.forEach(function(x) {
      let li = document.createElement("li");
      let text = document.createElement("span");
      text.innerHTML = x.name;
      li.appendChild(text);
      if (x.children && x.children.length>0)
        TreeView(x.children, li);
      ul.append(li);
    });
    return ul;
  }
   
  export default TreeView
  