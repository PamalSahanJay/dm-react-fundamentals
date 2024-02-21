
import '../App.css';
import React, { useState, useEffect } from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuid } from 'uuid'

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
      <Header />
      <AddContact addContactHandler={addContactHandlerApp} />
      <ContactList contacts={contacts} getIdFromContactList={deletehandler} />
    </div>
  );
}

export default App;
