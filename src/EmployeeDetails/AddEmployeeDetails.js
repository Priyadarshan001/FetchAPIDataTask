import React, { useState } from "react";
import "./Empstyle.css";
import { departments } from "./const";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddEmployeeDetails(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const emptyEmpData = {
    id: "",
    dept: "",
    name: "",
    email: "",
    contact: "",
    address: "",
  };
  const [detailedFormData, setDetailedFormData] = useState(emptyEmpData);
  const [detailedData, setDetailedData] = useState([]);
  console.log(props.empData[0].name);

  React.useEffect(() => {
    if (props.empData[0].name) {
      setDetailedFormData((prev) => {
        return { ...prev, name: props.empData[0].name };
      });
    }
  }, []);

  const addID = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, id: e.target.value };
    });
    console.log("id value", e.target.value);
  };
  const addDepartment = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, dept: e.target.value };
    });
    console.log("dept value", e.target.value);
  };
  const addName = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, name: e.target.value };
    });

    console.log("name value", detailedFormData);
  };
  const addEmail = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, email: e.target.value };
    });
    console.log("email value", e.target.value);
  };
  const addContact = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, contact: e.target.value };
    });
    console.log("contact value", e.target.value);
  };
  const addAddress = (e) => {
    setDetailedFormData((prev) => {
      return { ...prev, address: e.target.value };
    });
    console.log("address value", e.target.value);
  };

  const saveEmpData = () => {
    setOpen(true);
    if (detailedFormData.name && detailedFormData.dept) {
      setDetailedData((prev) => {
        return [...prev, detailedFormData];
      });
    }
    setDetailedFormData((prev) => {
      return { ...prev, emptyEmpData };
    });
  };

  return (
    <div>
      <div className="inputfield">
        <div className="inputBox">
          <label>ID</label>
          <input
            type="text"
            // placeholder={props.dept}
            value={detailedFormData.id}
            onChange={addID}
          />
        </div>

        <div className="inputBox">
          Department
          <select value={detailedFormData.dept} onChange={addDepartment}>
            {departments.map((val, index) => (
              <option key={index} value={val.DepartmentId}>
                {val.DepartmentName}
              </option>
            ))}
          </select>
        </div>

        <div className="inputBox">
          <label>Name</label>
          <input
            type="text"
            // placeholder={props.name}
            value={detailedFormData.name}
            onChange={addName}
          />
        </div>

        <div className="inputBox">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email here."
            value={detailedFormData.email}
            onChange={addEmail}
          />
        </div>

        <div className="inputBox">
          <label>Contact</label>
          <input
            type="text"
            placeholder="Enter contact number"
            value={detailedFormData.contact}
            onChange={addContact}
          />
        </div>

        <div className="inputBox">
          <label>Address</label>
          <textarea
            type="text"
            placeholder="Enter city name."
            value={detailedFormData.address}
            onChange={addAddress}
          />
        </div>
        <button className="btn2" onClick={saveEmpData}>
          Save
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {detailedData.map((item, index) => {
              let selectedObj = departments.find((i) => {
                return i.DepartmentId == item.dept;
              });
              return (
                <div key={index} className="data">
                  <div>Id:{item.id}</div>
                  <div>Name:{item.name}</div>
                  <div>Department:{selectedObj?.DepartmentName}</div>
                  <div>Email:{item.email}</div>
                  <div>Contact:{item.contact}</div>
                  <div>Address:{item.address}</div>
                </div>
              );
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
