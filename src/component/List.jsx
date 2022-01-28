function List(props) {

    function showClick() {
        props.showClicked(props.id);
    }

    return (
        <li key={props.id}>{props.name}<button onClick={showClick}>Show</button></li>
    );
}

export default List;