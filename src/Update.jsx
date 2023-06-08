import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './useReducer';

const Update = () => {
    const {id}=useParams();
    const users=useSelector((state)=> state.users);
    // eslint-disable-next-line eqeqeq
    const exitingUser=users.filter(f=>f.id==id);
    const {name,email}=exitingUser[0];
    const [editName,setEditName]=useState(name);
    const [editEmail ,setEditEmail]=useState(email);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
         event.preventDefault();
         dispatch(updateUser({
            id,
            name:editName,
            email:editEmail
         }))
         navigate("/")
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-primary text-white p-5'>
       <h3>Update User</h3>
       <form onSubmit={handleSubmit} >
           <div>
               <label htmlFor="name">Name:</label>
               <input type="text" name='name' className='form-control' placeholder='Enter name ' value={editName} onChange={e=> setEditName(e.target.value)}/>
           </div>
           <div>
               <label htmlFor="email">Email:</label>
               <input type="email" name='email' className='form-control' placeholder='Enter email' value={editEmail} onChange={e=>setEditEmail(e.target.value)}/>
           </div><br />
           <button className='btn btn-warning'>Update</button>
       </form>

    </div>
   </div>
  )
}
export default Update
