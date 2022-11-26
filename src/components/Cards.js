import React from 'react'
import { useDispatch} from 'react-redux';
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { delEmployee, getEmployee} from '../redux/actions/action';

import "./cards.css"


export const Cards = (props) => {
    
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete?")) {
            dispatch(delEmployee(id))
            dispatch(getEmployee())
        }
    }
  

    

    return (
        <>
            <div className="CardData">
                <Card style={{ width: '20rem' }} >
                    <Card.Body >
                        <Card.Text> FirstName: {props.item?.first_name} </Card.Text>
                        <Card.Text> LastName: {props.item?.last_name}</Card.Text>
                        <Card.Text> E-Mail:  {props.item?.email} </Card.Text>
                        <Card.Text> Gender:   {props.item?.gender}</Card.Text>
                        <Card.Text> Status:   {props.item?.status}</Card.Text>
                        <div className="container button">
                            <Button className="w-50" onClick={() => handleDelete(props.item?.id)}>Delete</Button>                            
                            <Link to={`edit/${props.item?.id}`} state={props.item} className="w-50"><Button>Edit</Button></Link>                          
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )


}

