import { AddEmp } from "../components/AddEmp/add"
import "./addEmploy.css"
export const EmployeeForm = () => {
    return(
        <>
            <div className="container">
                <h1> Add an employee</h1>
            </div>
            < AddEmp />
        </>
    )
}