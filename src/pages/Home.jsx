import Layout from "../Layout";
import React, {useContext, useEffect, useState} from 'react';
import '../styles/Home.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
]

const Home = () => {
    const [sector, setSector] = useState('React - Assessment');
    const [employees, setEmployees] = useState(mockEmployees);
    const [newEmployee, setNewEmployee] = useState({ 
        name: '', 
        lastname: '', 
        position: ''
    })

    const handleAdminClick = () => {
        setSector('Home - Admin Sector')
    }

    const handleUserClick = () => {
        setSector('Home - User Sector')
    }

    const handleNameChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            name: e.target.value
        });
    }

    const handleLastNameChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            lastname: e.target.value
        });
    }

    const handlePositionChange = (e) => {
        setNewEmployee({
            ...newEmployee,
            position: e.target.value
        });
    }
    
    const handleSave = () => {
        setEmployees([
            ...employees,
            {
                id: employees.length +1, 
                ...newEmployee
            }
        ]); 

        setNewEmployee({ 
            name: '', 
            lastname: '', 
            position: ''
        })
        
    }

    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    }
    
    return (
        <Layout>
            <>
                <div className="content">
                    <h1>Generation Thailand <br /> {sector}</h1>

                    <div className="button">
                        <button className='set-title' onClick={handleUserClick}>User Home Sector</button>
                        <button className='set-title' onClick={handleAdminClick}>Admin Home Sector</button>
                    </div>

                    {sector === 'Home - Admin Sector' ?
                        <div className="admin-content">
                            <h2>Create User Here</h2>

                
                            <div className="input-form">
                                <input type="text" placeholder="Name" value={newEmployee.name} onChange={handleNameChange} />
                                <input type="text" placeholder="Last Name" value={newEmployee.lastname} onChange={handleLastNameChange} />
                                <input type="text" placeholder="Position" value={newEmployee.position} onChange={handlePositionChange} />
                                <button onClick={handleSave} className="save-button">Save</button>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Last Name</th>
                                        <th>Position</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {employees.map(employee => {
                                        return(
                                            <tr key={employee.id}>
                                                <td>{employee.name}</td>
                                                <td>{employee.lastname}</td>
                                                <td>{employee.position}</td>
                                                <td>
                                                    <button className='delete-button' type='button' onClick={() => handleDelete(employee.id)}>
                                                    <i className="fa-solid fa-user-xmark" style={{color: "#ff0000"}}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        : sector === 'Home - User Sector' ?
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Last Name</th>
                                        <th>Position</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {employees.map(employee => {
                                        return(
                                            <tr key={employee.id}>
                                                <td>{employee.name}</td>
                                                <td>{employee.lastname}</td>
                                                <td>{employee.position}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        :
                        <></>
                    }
                </div>

                
            </>
        </Layout>
    );
};

const Form = (props) => {
    return (
        <>
            
        </>
    );
}

const Admin = (props) => {
    return (
        <>
            
        </>
    );
}

const User = (props) => {
    return (
        <>
            
        </>
    );
}

export default Home;
