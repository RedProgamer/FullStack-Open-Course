function Filter(props) {
    return (
        <p>filter: <input value={props.value} onChange={props.onChange} name='filter'/></p>
    );
}

export default Filter;