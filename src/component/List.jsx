function List({ id, name }) {
    return (
        <li key={id}>{name}</li>
    );
}

export default List;