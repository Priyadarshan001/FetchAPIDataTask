import React from "react";

function Practice(props) {
  const [deptValue, setDeptVal] = React.useState();
  return (
    <div>
      <div>
        {props.myarr.map((value) => {
          console.log("prac value", value.dept);
          setDeptVal(value);
          return <h5>{value.dept}</h5>;
        })}
      </div>
      <div>
        {deptValue.employees.map((element) => {
          return <h6>{element.Name}</h6>;
        })}
      </div>
    </div>
  );
}

export default Practice;
