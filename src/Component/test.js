import React from "react";
import { useState } from "react";

function Test(props) {
  const [empData, setEmpData] = useState(null);

  return (
    <div>
      {props.myArray.map((value, index) => {
        // value.employees.map((subValue) => {});
        return (
          <div key={index}>
            <button
              onClick={() => {
                setEmpData(value);
              }}
            >
              {value.dept}
            </button>
          </div>
        );
      })}
      <div>
        {empData?.employees.map((empData) => (
          <div>
            <p>{empData?.Name}</p>
            <p>{empData?.Age}</p>
            <p>{empData?.Salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
