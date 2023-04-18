const Admin = (props) => {
    const {employees, handleDelete} = props;

    return (
        <>
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
        </>
    );
}

export default Admin;