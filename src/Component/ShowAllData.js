import React from 'react'
import {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';



function ShowAllData(Data) {
    const [users,setUsers]=useState([]);
    

    const LoadData=async ()=>{
        try{
           const res=await fetch("http://localhost:3003/users");
           const result=await res.json();
        //    console.log(JSON.stringify(result));
           setUsers(result)
        }
        catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>{
     LoadData();
    },[])

    const deleteHandler=async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        LoadData();
    }

  return (
   <>
   <div className='tableDiv'>
   <table>
    <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Enrollment no.</th>
        <th>Class</th>
        <th>Gender</th>
    </thead>
    <tbody>
        {
            users.map((current,index)=>{
                return(
                    <>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{current.name}</td>
                        <td>{current.enrollment_no}</td>
                        <td>{current.Class}</td>
                        <td>{current.gender}</td>
                        <td><NavLink to={`/viewuser/${current.id}`} className="link" >View</NavLink></td>
                        <td><NavLink to={`/edituser/${current.id}`} className="link">Edit</NavLink></td>
                        <td><NavLink to="" className="link" onClick={(e)=>deleteHandler(current.id)}>Delete</NavLink>
                        </td>
                    </tr>
                    </>
                )
            })
        }
    </tbody>
   </table>
   </div>
    </>
  )
}

export default ShowAllData