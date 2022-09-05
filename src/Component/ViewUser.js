import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    enrollment_no: "",
    Class: "",  
    gender: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="viewDiv">
      <div>
      <h1>User Id: {id}</h1>
      <hr />
      <ul>
        <li>NAME: {user.name}</li>
        <li>ENROLLMENT_NO: {user.enrollment_no}</li>
        <li>CLASS: {user.Class}</li>
        <li>GENDER: {user.gender}</li>
      </ul>
      <div id="link">
      <NavLink className="Backlink" to="/">
        back to Home
      </NavLink>
      </div>
    </div>
    </div>
  );
};

export default ViewUser;