import Note from "./Note";

function Content({ filtered }) {    
    
    return (
        <ul>
           {filtered.map(list => {
               return <Note key={list.id} note={list} />
           })} 
        </ul>
    );
}

export default Content;