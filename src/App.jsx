import React, { Component } from 'react';
import styled from 'styled-components';
import { ContactList } from './components/ContactList/ContactList';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = addedContact => {
    const { contacts } = this.state;
    contacts.find(contact =>
      contact.name.toLowerCase().includes(addedContact.name.toLowerCase())
    )
      ? alert(`${addedContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            {
              id: addedContact.id,
              name: addedContact.name,
              number: addedContact.number,
            },
            ...prevState.contacts,
          ],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterValue = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  contactFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredSearch = this.contactFilter();
    return (
      <Wrapper>
        <PhonebookContainer>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onSubmit={this.addContact} />
        </PhonebookContainer>
        <ContactContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onChange={this.filterValue} value={this.state.filter} />
          <ContactList
            contacts={filteredSearch}
            onDelete={this.deleteContact}
          />
        </ContactContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PhonebookContainer = styled.div`
  flex-direction: column;
`;

const PhonebookTitle = styled.h1`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ContactContainer = styled.div`
  flex-direction: column;
  width: 400px;
`;

const ContactsTitle = styled.h2`
  text-align: center;
  margin-top: 50px;
`;
