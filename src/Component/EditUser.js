import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
   

  const [user, setUser] = useState({
    name: "",
    enrollment_no: "",
    Class: "",  
    gender: ""
  });

  const {  name, enrollment_no, Class, gender } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history("/showdata");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return  (
    
      <div className="addDiv">
        <form onSubmit={e => onSubmit(e)}>
        <h2>Updata User</h2>
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
          <button className="btn btn-primary btn-block">Update User</button>
        </form>
      </div>
    
  );
};

export default EditUser;