import {GET_EMPLOYEES, DELETE_EMPLOYEES,EDIT_EMPLOYEES } from "./actionTypes";

import axios from 'axios';


export const getEmployee = () => async dispatch => {
    
    try{
        const response = await axios.get("http://localhost:3001/employees")
        // console.log("the response",response)
        dispatch( {
            type: GET_EMPLOYEES,
            payload: response.data
        })

    }
   catch(e){
    dispatch( 
        console.log("Error")
    )
   }
}

export const delEmployee = (id) => async dispatch => {
    
    try{
        const response = await axios.delete(`http://localhost:3001/employees/${id}`)
        // console.log("the response",response)
        dispatch( {
            type: DELETE_EMPLOYEES,
            payload: response.data
        }) 

    }
   catch(e){
    dispatch( 
        console.log("Error")
    )
   }
}

export const editEmployee = (data,id) => async dispatch => {
    console.log("the data in the thunk function",data)
    console.log("the id ithe action",id)
    
    try{
        const response = await axios.put(`http://localhost:3001/employees/${id}`,data)
        
        dispatch( {
            type: EDIT_EMPLOYEES,
            payload: response.data
        }) 

    }
   catch(e){
    dispatch( 
        console.log("Error")
    )
   }
}



