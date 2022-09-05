import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddData = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    enrollment_no: "",
    Class: "",  
    gender: "",
    photo:""
  });

  const { name, enrollment_no, Class, gender, photo } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const onSubmit = async e => {
    
    e.preventDefault();
    if(!name)
    {
      alert("Please fill the Name");
    }
    else if(!enrollment_no)
    {
      alert("Please fill the Enrollment_no");
    }
    else if(!Class)
    {
      alert("Please fill the class");
    }
    else if(!gender)
    {
      alert("Please fill the gender");
    }
   else{
      await axios.post("http://localhost:3003/users", user);
      history("/showdata");
   }
  };
  return (
    
      <div className="addDiv">
        <form onSubmit={e => onSubmit(e)}>
        <h2>Add A User</h2>
          <div>
            <label>Name</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label>Enrollment_no</label>
          </div>
          <div>
            <input
              type="number"
              name="enrollment_no"
              value={enrollment_no}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label>Class</label>
          </div>
          <div>
            <input
              type="text"
              name="Class"
              value={Class}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label>Gender</label>
          </div>
          <div>
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <label>Photo</label>
          </div>
          <div>
            <input
              type="file"
              name="photo"
              value={photo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    
  );
};

export default AddData;