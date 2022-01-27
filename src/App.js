import React, { useState, useEffect } from 'react';
import Filter from './component/Filter';
import Form from './component/Form';
import Content from './component/Content';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredList, setFilteredList] = useState(notes);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const newNote = {
      id: notes[notes.length - 1].id + 1,
      name: name,
      phone: phoneNo
    };

    const doesExists = notes.find(note => note.content === name);

    if(doesExists) {
      alert(`${name} already exists!`);
      return;
    };

    setNotes(notes.concat(newNote));
    setName('');
    setPhoneNo('');
  };

  const inputNameHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const inputPhoneNoHandler = (event) => {
    event.preventDefault();
    setPhoneNo(event.target.value);
  };

  const inputFilterHandler = (event) => {
    const typed = event.target.value;
    
    setFilter(typed);
    const filteredItemList = notes.filter(note => note.content.toLowerCase().includes(typed.toLowerCase()));
    setFilteredList(filteredItemList);
  };

  const hook = () => {
    axios
    .get('http://localhost:3001/notes')
    .then(response => {
      const notes = response.data;
      setNotes(notes);
      console.log(notes);
    });
  }

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={inputFilterHandler} value={filter} />
      <Form onSubmit={formSubmitHandler} newName={name} newPhoneNo={phoneNo} inputNameHandler={inputNameHandler} inputPhoneNoHandler={inputPhoneNoHandler} />
      <h2>Numbers</h2>
      <Content filtered={filteredList} allNotes={notes}/>
    </div>
  )
}

export default App