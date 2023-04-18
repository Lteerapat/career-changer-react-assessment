const Form = (props) => {
    const {newEmployee, handleNameChange, handleLastNameChange, handlePositionChange, handleSave} = props;
    return (
        <div className="input-form">
            <input type="text" placeholder="Name" value={newEmployee.name} onChange={handleNameChange} />
            <input type="text" placeholder="Last Name" value={newEmployee.lastname} onChange={handleLastNameChange} />
            <input type="text" placeholder="Position" value={newEmployee.position} onChange={handlePositionChange} />
            <button onClick={handleSave} className="save-button">Save</button>
        </div>
    );
}

export default Form;