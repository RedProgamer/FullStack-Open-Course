import Note from "./component/Note";
import { useState } from 'react';

const DUMMY_Notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
]

function App() {

  const [notes, setNotes] = useState(DUMMY_Notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const addItem = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }  

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const inputHandler = (event) => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => {setShowAll(!showAll)}}>show {showAll ? 'important' : 'all'}</button>
        </div>
        <ul>
            {notesToShow.map((note) => {
              return <Note key={note.id} note={note} />
            })} 
        </ul>
        <form onSubmit={addItem}>
            <input value={newNote} onChange={inputHandler} placeholder="write something new..."/>
            <button type="submit">save</button>
        </form>
      </div>
    );
}

export default App;