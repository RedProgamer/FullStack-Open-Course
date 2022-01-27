import Note from "./Note";

function Content({ filtered, allNotes }) {

    const notes = filtered.length > 0 ? filtered : allNotes;

    return (
        <ul>
           {notes.map(list => {
               return <Note key={list.id} note={list} />
           })} 
        </ul>
    );
}

export default Content;