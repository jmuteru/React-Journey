import React from 'react';

function Person({person}) {
  return <div>
       <ul key={person.id}>
      <li>{person.name}</li>
      <li>{person.username}</li>
      <li>{person.email}</li>
      <li>{person.address.street}</li>
      <li>{person.address.suite}</li>
      <li>{person.address.city}</li>
      <li>{person.address.zipcode}</li>
    </ul>
  </div>;
}

export default Person;
