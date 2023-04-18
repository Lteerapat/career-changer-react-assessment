import Layout from "../Layout";
import React, {useContext, useEffect, useState} from 'react';
import SectorButton from "../components/SectorButton";
import Form from "../components/Form";
import Admin from "../components/Admin";
import User from "../components/User";
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

                    <SectorButton 
                        handleUserClick={handleUserClick}
                        handleAdminClick={handleAdminClick}
                    />

                    {sector === 'Home - Admin Sector' ?
                        <div className="admin-content">
                            <h2>Create User Here</h2>
                            <Form 
                                newEmployee={newEmployee} 
                                handleNameChange={handleNameChange} 
                                handleLastNameChange={handleLastNameChange} 
                                handlePositionChange={handlePositionChange} 
                                handleSave={handleSave} 
                            />
                            <Admin 
                                employees={employees} 
                                handleDelete={handleDelete} 
                            />
                        </div>
                        : sector === 'Home - User Sector' ?
                            <User employees={employees} />
                            :
                            <></>
                    }
                </div>
            </>
        </Layout>
    );
};

export default Home;
