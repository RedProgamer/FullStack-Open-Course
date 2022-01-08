function Form(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input name='name' value={props.newName} onChange={props.inputNameHandler}/>
            </div>
            <div>
                <label htmlFor='phone'>Phone No: </label>
                <input name='phone' value={props.newPhoneNo} onChange={props.inputPhoneNoHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}

export default Form;