import { Contact } from "components/Contact/Contact";
export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      );
    })}
  </ul>
);

