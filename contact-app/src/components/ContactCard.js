import React from 'react'
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='item'>
            <Link to={`/contacts/${id}`} state={{contactPJ: props.contact}}>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
            </Link>
            <i className='trash alternate outline icon'
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.getIdContactCard(id)}
            >

            </i>
        </div>
    )
}

export default ContactCard;