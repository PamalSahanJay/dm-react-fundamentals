import React from 'react'
import user from '../images/user.jpg'
import { useLocation, Link } from 'react-router-dom'

const ContactDetails = () => {
    let { state } = useLocation();
    return (
        <div>
            <div className='main ContactList'>
                <div className='ui card centered'>
                    <div className='image'>
                        <img src={user} alt='user' />
                    </div>
                    <div className='content'>
                        <div className='header'><h1>{state.contactPJ.name}</h1></div>
                        <div className='description'>{state.contactPJ.email}</div>
                    </div>
                </div>
                <div className='center-div'>
                    <Link to={"/"}>
                        <button className='ui button blue right'>Add Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails