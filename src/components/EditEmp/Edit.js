import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { editEmployee } from '../../redux/actions/action'

import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'



export const Edit = () => {
    const employeedetails = useLocation().state
    console.log("Edit_Employee", employeedetails)
    const { id } = useParams();    
    const navigate = useNavigate();


    const [first_name, setFirstName] = useState(employeedetails.first_name);
    const [last_name, setLastName] = useState(employeedetails.last_name);
    const [email, setEmail] = useState(employeedetails.email);
    const [gender, setGender] = useState(employeedetails.gender);
    const [status, setStatus] = useState(employeedetails.status);

    const dispatch = useDispatch()

    const putDetails = (e) => {
            e.preventDefault();
            const finalData= {
                id:id,
                first_name: first_name,
                last_name: last_name,
                email: email,
                gender :gender,
                status: status
            }
            dispatch(editEmployee(finalData,id))
        navigate("/")


    }
    return (
        <>
            <div className='container cont'>
                <div className='row main'>
                    <h1>Add a New Employee</h1>
                    <div className='col forms'>
                        <Form className="d-flex">
                            <div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Eg. Aayush" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Eg. Neupane" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Label>Gender</Form.Label>
                                <Form.Select aria-label="Default select example" value={gender} className="mb-3" onChange={(e) => setGender(e.target.value)}>
                                    <option value="none">Select your Gender..</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Other</option>
                                </Form.Select>
                                <Form.Label >Status</Form.Label>
                                <Form.Select aria-label="Default select example" value={status} className="mb-5" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="none">Select your status</option>
                                    <option value="New">New</option>
                                    <option value="Terminated">Terminated</option>
                                    <option value="Leaving">Leaving</option>
                                    <option value="Active">Active</option>
                                </Form.Select>
                                <Button onClick={putDetails} type='submit'>Update</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}