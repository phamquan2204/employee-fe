import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService.js'

function UpdateEmployee() {

    const { id } = useParams()
    const [employees, setEmployees] = useState([{
        firstName: '',
        lastName: '',
        emailId: ''
    }]);
    const [prevEmployee, ...rest] = [{ ...employees }]

    const { prevFirstName, prevLastName, prevEmailId } = prevEmployee




    useEffect(() => {
        EmployeeService.getEmployeesById(id).then(res => setEmployees(res.data))
    }, []);
    const { firstName, lastName, emailId } = employees;

    const handleChange = (e) => {
        setEmployees((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = (data) => {
        const { firstName, lastName, emailId } = data
        if (firstName !== null && lastName !== null && emailId !== null) {
            return true
        } else {
            return false
        }
    }


    const saveEmployee = () => {
        let employee = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };
        EmployeeService.updateEmployee(id, employee).then(() => alert('Employee updated successfully.'))
    }

    return (
        <div>
            <div className="container text-capitalize border border-dark p-3 rounded text-dark mt-5 mb-5 card-body">
                <h2 className="text-center text-capitalize">Update employee</h2>
                <form
                    action="POST"
                    className="was-validated"
                    onSubmit={
                        handleSubmit(employees) ? saveEmployee : null
                    }
                >
                    <div className="form-group row p-3">
                        <label htmlFor="firstName" className="text-left">first name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            value={firstName}
                            onChange={handleChange}
                            required />
                        <div className="invalid-feedback text-left">Please fill out this field.</div>
                    </div>
                    <div className="form-group row p-3">
                        <label htmlFor="lastName" className="text-left">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-control"
                            value={lastName}
                            onChange={handleChange}
                            required />
                        <div className="invalid-feedback text-left">Please fill out this field.</div>
                    </div>
                    <div className="form-group row p-3">
                        <label htmlFor="emailId" className="text-left">Email</label>
                        <input
                            type="email"
                            name="emailId"
                            id="email"
                            className="form-control"
                            value={emailId}
                            onChange={handleChange}
                            required />
                        <div className="invalid-feedback text-left">Please fill out this field.</div>
                    </div>
                    <div className="form-group row p-3">
                        <button
                            type="submit"
                            className="btn btn-primary col-1-lg mr-3"
                            onClick={(e) => {
                                e.preventDefault()
                                saveEmployee()
                            }
                            }
                        >Update</button>
                        <button className="btn btn-danger col-1-lg">
                            <Link to="/">Cancel</Link>
                        </button>
                    </div>
                </form>
                <div>{console.log()}</div>
            </div>
        </div >

    )
}

export default UpdateEmployee