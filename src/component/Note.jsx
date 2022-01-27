function Note(props) {

    const { id, content } = props.note;

    return (
        <li key={id}>{content}</li>
    );
}

export default Note;