import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getIdFromContactList(id)
    }
    const renderContactDetails = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} getIdContactCard= {deleteContactHandler}/>
        );
    });
    return (
        <div className='ui celled list'>
            {renderContactDetails}
        </div>
    )
}

export default ContactList;