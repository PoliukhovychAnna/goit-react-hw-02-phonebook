export const Contacts = ({ title, contacts }) => (
  <>
        <h2>{title}</h2>
        <input type="text" />
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name} {number}
        </li>
      );
    })}
  </>
);
