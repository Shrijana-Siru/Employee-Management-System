import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./home.css"
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../redux/actions/action';
import { Cards } from '../components/Cards';


export const HomePage = () => {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployee())
    }, [])

    const { employees } = useSelector((state) => state.users)
    

    useEffect(()=> {
        if(employees) {            
            
            
            const name = employees.filter((item) => item.first_name === "Shrijana ")    
            console.log(name)    
        }
    },[employees])
    
    const navigate = useNavigate();
    const navigateAdd = () => {
        navigate('/add');
    };

   

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <h1> Employee Management</h1>
                </div>
                <div className='row w-50'>
                    <Button className='AddButton' onClick={navigateAdd}>Add Employee</Button>
                </div>
                <div className="container datas mt-5">
                {employees.map((item) => <Cards item={item} key={item.id} />)}              
                </div>
            </div>
        </>
    )
}

