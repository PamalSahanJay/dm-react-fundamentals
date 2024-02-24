
import '../App.css';
import React, { useState, useEffect } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const KEY = "CONTACTS_KEY"
  const [contacts, setContacts] = useState(() => {
    console.log("this is from useState")
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : []
  })

  const addContactHandlerApp = (contact) => {
    const newContact = { id: uuid(), ...contact }
    console.log(contact)
    setContacts([...contacts, newContact])
  }

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts))
  }, [contacts])

  const deletehandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={() => <ContactList contacts={contacts} getIdFromContactList={deletehandler} />} />
          <Route path='/add' Component={()=> <AddContact addContactHandler={addContactHandlerApp} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
