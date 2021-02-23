import React from "react";

function TreeUL({ data }) {
  const getHTML = (data) => {
    return (
      <>
        <span>{data.name}</span>
        {data.children && data.children.length > 0 ? (
          <TreeUL data={data.children} />
        ) : (
          ""
        )}
      </>
    );
  };
  const getInnerHTML = (data) => {
    if (Array.isArray(data)) {
      return data.map((emp, id) => {
        return <li key={id}>{getHTML(emp)}</li>;
      });
    } else {
      return <li>{getHTML(data)}</li>;
    }
  };
  return <ul>{getInnerHTML(data)}</ul>;
}

export default TreeUL;
