import React, { Component } from "react"
import { nanoid } from 'nanoid';
import { Contacts } from "./Contacts/Contacts";
export class App extends Component {
  state = {
    contacts: [],
    filter:"",
  name: '',
  number:'',
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    const newContact = {
      name: this.state.name,
      number: this.state.number,
    id: nanoid()};
    this.setState((prevState) => ({ contacts: [...prevState.contacts, newContact]}))
    this.setState({name:"", number: ""})
  }

  contactFilter = (e) => {

  }
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            <h4>Number</h4>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <Contacts title="Contacts" contacts={this.state.contacts} />
      </>
    );
  }
};
