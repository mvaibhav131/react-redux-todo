import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './useReducer'

const Home = () => {
    const users=useSelector((state)=>state.users)
    // console.log(users)
    const dispatch=useDispatch();
    const handleDelete=(id)=>{
          dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container'>
        <h2>CRUD App with JSON-Server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((e,i)=>(
                    <tr key={i}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>
                        <Link to={`/edit/${e.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                        <button onClick={()=>handleDelete(e.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>

                      </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home
