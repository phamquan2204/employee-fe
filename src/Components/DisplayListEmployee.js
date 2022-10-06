import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService.js';
import Create from './Create.js'
import useWindowDimention from '../Functions/useWindowDimention.js';

import '../Assets/DisplayListEmployee.css'

function DisplayListEmployee() {
    const [employees, setEmployees] = useState([])
    const [query, setQuery] = useState('')
    const [displayVal, setDisplayVal] = useState(false);
    const [create, setCreate] = useState(false);

    const { height, width } = useWindowDimention()


    useEffect(() => {
        EmployeeService.getEmployees().then(res => {
            setEmployees(res.data)
        })
        
    }, []);

    const keys = ["firstName", "lastName", "emailId", "id"]
    const filter = (data) => {
        return data.filter(
            (item) =>
                keys.some(key => item[key].toString().toLowerCase().includes(query))
        )
    }

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res => setEmployees(employees.filter(e => e.id !== id)))
        // console.log(id)
    }

    return (
        <div className="main-container container text-center">
            <h2 className="m-3">Employee Management</h2>
            <p>{width} {height}</p>
            <div className="mb-5">
                <div className="button-group ">
                    <button
                        className="btn btn-success mb-3 float-left"
                        onClick={() => { setCreate(!create) }}
                    >
                        {!create ?
                            <>
                                <p className="text-uppercase d-inline m-2">
                                    <span>create </span>
                                    <i className="fa-solid fa-plus d-inline"></i>
                                </p>
                            </>
                            :
                            <Link to="/employee" className='text-light text-decoration-none'>
                                <p className="text-uppercase d-inline m-2 ">
                                    <span>Home </span>
                                    <i className="fa-solid fa-house"></i>
                                </p>
                            </Link>
                        }
                    </button>
                    <button
                        className="btn btn-primary mb-3 float-right"
                        onClick={() => {
                            setDisplayVal(!displayVal)
                            setCreate(false)
                        }}
                    >
                        <>
                            <p className="text-uppercase d-inline m-2">
                                <span>search </span>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </p>
                        </>
                    </button>
                </div>
                {
                    displayVal
                        ? <div className="search-employee float-lg-right float-sm-right mr-2 sm-mt-3 sm-row" >
                            <input className="float-lg-right" type="text" name="search" id="search" onChange={(e) => {
                                setQuery(e.target.value);
                            }} />
                        </div>
                        : null
                }
            </div>
            <div
                className="container m-0 mt-5 p-0 pt-1"
                style={{ overflowX: "auto", }}
            >
                {
                    create ?
                        <Create /> :
                        <table className="table table-bordered table-hover">
                            <thead className="thead thead-light">
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filter(employees).map((employee) => {
                                    const { id, firstName, lastName, emailId } = employee
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{firstName}</td>
                                            <td>{lastName}</td>
                                            <td>{emailId}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary ml-1 " >
                                                    <Link to={`/update/employee/` + id} className='text-light'>
                                                        <p className="d-inline mr-1">Edit</p>
                                                        <i className="fa-solid fa-pen d-inline"></i>
                                                    </Link>
                                                </button>
                                                <button
                                                    className="btn btn-danger ml-1 "
                                                    onClick={() => { deleteEmployee(id) }}
                                                >
                                                    <p className="d-inline mr-1">Delete</p>
                                                    <i className="fa-solid fa-trash-can d-inline"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                }
            </div>
        </div >
    )
}

export default DisplayListEmployee