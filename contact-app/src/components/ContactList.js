import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'
const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getIdFromContactList(id)
    }
    const renderContactDetails = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} getIdContactCard={deleteContactHandler} />
        );
    });
    return (
        <div className='ContactList'>
            <h2>Contact List</h2>
            <Link to={"/add"}>
            <button className='ui button blue right'>Add Contact</button>
            </Link>
            
            <div className='ui celled list'>
                {renderContactDetails}
            </div>
        </div>

    )
}

export default ContactList;