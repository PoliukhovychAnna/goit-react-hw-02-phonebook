export const Contact = ({ id, name, number, onDelete }) => (
  <li key={id}> {name} {number}
    <button type="button" onClick={() => onDelete(id)}>Delete</button>
  </li>
);