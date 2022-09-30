import React from 'react';

function Test(props) {
  const [empData, setEmpData] = React.useState();

  const setEmployeeData=(value)=>{
    console.log("Value inside getValue():", value)
    
      setEmpData(value) 
  }
  return (
    <div>
      {props.myArray.map((value, index) => {
        return (
          <div key={index}>
            <button onClick={()=>setEmployeeData(value)}>{value.dept}</button>
          </div>
        );
      })}
      
      {empData && 
      <div>{empData.employees.map((data) => (
          <div key={data.Id}>
            <p>{data.Name}</p>
            <p>{data.Age}</p>
            <p>{data.Salary}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default Test;
