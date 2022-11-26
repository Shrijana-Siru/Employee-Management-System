import  React  from 'react'
import { Form, Button } from 'react-bootstrap'

import { useForm } from "react-hook-form"
import axios from 'axios'



import './add.css'
export const AddEmp = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({mode: 'onChange'});

    console.log("the form error",errors)

    const submitMyForm = (addDetail) => {
        
        console.log(addDetail.first_name);
        console.log(addDetail.last_name);
        console.log(addDetail.email);
        console.log(addDetail.gender);
        console.log(addDetail.status);

        axios.post('http://localhost:3001/employees',addDetail)
    }


    return (
        <>
            <div className='container cont'>
                <div className='row main'>
                    <h1>Add a New Employee</h1>
                    <div className='col-12 forms'>
                        <Form className="d-flex form" onSubmit={handleSubmit(submitMyForm)}>
                            <div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control {...register("first_name", { required: true})} type="text" placeholder="Eg. shrijana"  />
                                    {errors?.first_name?.type === "required" && <p>This field is required</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control {...register("last_name", { required: true })} type="text" placeholder="Eg. bhandari"  />
                                    {errors?.last_name?.type === "required" && <p>This field is required</p>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control {...register("email", { required: true })} type="email" placeholder="name@example.com"  />
                                    {errors?.email?.type === "required" && <p>This field is required</p>}
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Label>Gender</Form.Label>
                               
                                <Form.Select {...register("gender", { required: true })} aria-label="Default select example" >
                                    <option value="">Select your Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Other</option>
                                    
                                </Form.Select>
                                {errors?.gender?.type === "required" && <p>This field is required</p>}
                                
                                <Form.Label >Status</Form.Label>
                                <Form.Select {...register("status", { required: "gender is required" })} aria-label="Default select example" >
                                    <option value="">Select your status</option>
                                    <option value="New">New</option>
                                    <option value="Terminated">Terminated</option>
                                    <option value="Leaving">Leaving</option>
                                    <option value="Active">Active</option>
                                </Form.Select>
                                {errors?.status?.type === "required" && <p>This field is required</p>}
                                
                                <Button type='submit'>Add</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}
