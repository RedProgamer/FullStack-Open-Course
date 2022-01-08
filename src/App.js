import React, { useState } from 'react';
import Filter from './component/Filter';
import Form from './component/Form';
import Content from './component/Content';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredList, setFilteredList] = useState(persons);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const newPerson = {
      id: persons[persons.length - 1].id + 1,
      name: name,
      phone: phoneNo
    };

    const doesExists = persons.find(person => person.name === name);

    if(doesExists) {
      alert(`${name} already exists!`);
      return;
    };

    setPersons(persons.concat(newPerson));
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
    setFilter(event.target.value);
    const regex = new RegExp(filter, 'i' );
    const filteredItemList = persons.filter(person => person.name.match(regex));
    setFilteredList(filteredItemList);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={inputFilterHandler} value={filter} />
      <Form onSubmit={formSubmitHandler} newName={name} newPhoneNo={phoneNo} inputNameHandler={inputNameHandler} inputPhoneNoHandler={inputPhoneNoHandler} />
      <h2>Numbers</h2>
      <Content filtered={filteredList} allPersonList={persons}/>
    </div>
  )
}

export default App