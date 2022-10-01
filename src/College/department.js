import React,{useState} from 'react';
import '../style.css'

function DepartmentComponent(props) {
  const [empData, setEmpData] = useState();

  return (
    <div className='arraydata'>
      {props.myArray.map((value, index) => {
        return (
          <div key={index}>
            <button onClick={()=>setEmpData(value)}>{value.dept}</button>
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

export default DepartmentComponent;
