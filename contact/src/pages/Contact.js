import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import contactJSON from "./contacts.json";

export default function Contact() {
  const [contacts, setContact] = useState(contactJSON);
  //console.log(contacts)
  return (
    <div className='list'>
      <h1> My Peeps</h1>
      <ul >
        {contacts.map((contact) => (
          <li>
            <Link 
            className='text-link' 
            to={`/details/${contact.id}`}>
                <img className='photoList' src={contact.picture.thumbnail} width="30" height="30" alt='logo'/>
                 <span>{contact.name.first} {contact.name.last}</span>
            </Link>
          </li>
        ))}
       </ul>
    </div>
  );
}
