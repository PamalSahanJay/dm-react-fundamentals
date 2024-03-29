// import React from 'react'

// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: ""
//     }
//     add = (e) => {
//         e.preventDefault();
//         console.log(e)
//         if (this.state.name === "" || this.state.email === "") {
//             alert("all fields are mandatory")
//             return
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({ name: "", email: "" })
//     }
//     render() {
//         return (
//             <div className='ui main'>
//                 <h2>Add Contact</h2>
//                 <form className='ui form' onSubmit={this.add}>
//                     <div className='field'>
//                         <label>Name</label>
//                         <input
//                             type='text'
//                             name='name'
//                             placeholder='Name'
//                             value={this.state.name}
//                             onChange={(e) => this.setState({ name: e.target.value })}
//                         >
//                         </input>
//                     </div>
//                     <div className='field'>
//                         <label>Email</label>
//                         <input
//                             type='text'
//                             name='email'
//                             placeholder='Email'
//                             value={this.state.email}
//                             onChange={(e) => this.setState({ email: e.target.value })}
//                         >
//                         </input>
//                     </div>
//                     <button className='ui button blue'>Add</button>
//                 </form>
//             </div>
//         )
//     }
// }

import React, {useState} from 'react'

const AddContact = (props) => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const add = () => {

        if(formData.name === "" || formData.email === "") {
            alert("All fields are mandatory")
            return
        }
        props.addContactHandler(formData);
        setFormData({ name: "", email: "" })
    }

    const onChangeHandler= (e) => {
        console.log("onChangeHandele ------")
        console.log(e.target)
        const {name, value} = e.target;
        setFormData({...formData,[name]:value})
    }
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={onChangeHandler}
                    >

                    </input>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={onChangeHandler}
                    >

                    </input>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}

export default AddContact;