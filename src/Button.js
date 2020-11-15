let CustomButton = (props) => { 
    return(
        <div className='btn-container'>
            <button className='btn btn-danger'>
                <span className='material-icons material-icons-start'>add</span>
                <span>Default</span>
                <span className='material-icons material-icons-end'></span>
            </button>
        </div>
    );
}

export default CustomButton