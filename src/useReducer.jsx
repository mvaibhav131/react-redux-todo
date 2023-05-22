import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: "users",
    initialState:userList,
    reducers:{
         addUser:(state,action)=>{
            state.push(action.payload)
            console.log(action)
         },
         updateUser:(state,action)=>{
            const {id,name,email}=action.payload;
            // eslint-disable-next-line eqeqeq
            const updateUser=state.find(user=>user.id==id);
            if(updateUser){
                updateUser.name=name;
                updateUser.email=email 
            }
         },
         deleteUser:(state,action)=>{
            const {id}= action.payload;
            // eslint-disable-next-line eqeqeq
            const deleteuser=state.find(user=>user.id==id);
            if(deleteuser){
                return state.filter(f=> f.id !== id)
            }
         }
    }
});
export const {addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer; 