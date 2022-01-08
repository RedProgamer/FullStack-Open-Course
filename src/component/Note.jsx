function Note(props) {

    const { id, name, phone } = props.note;
    return (
        <li key={id}>{name}, {phone}</li>
    );
}

export default Note;