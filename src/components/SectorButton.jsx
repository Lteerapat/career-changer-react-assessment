const SectorButton =(props) => {
    const {handleUserClick, handleAdminClick} = props;
    return (
        <div className="button">
            <button className='set-title' onClick={handleUserClick}>User Home Sector</button>
            <button className='set-title' onClick={handleAdminClick}>Admin Home Sector</button>
        </div>


    );
}

export default SectorButton;