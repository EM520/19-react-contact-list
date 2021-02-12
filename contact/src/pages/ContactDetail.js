import {useState,useEffect} from 'react'
import contactJSON from './contacts.json'
import{ Link} from 'react-router-dom'
import {FaUser,FaEnvelope,FaMobileAlt,FaGlobeAmericas} from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faSmileWink} from "@fortawesome/free-solid-svg-icons"
export default function ContactDetail(props) {
    const id = props.match.params.id
    const userFound = contactJSON.find(user => user.id == id)
    const [activeUser,setActiveUser] = useState(userFound)

    return (
        
    <div className="contactCard">
        <p className='backHome'>  
           <Link className="backLink" to={"/"}> &larr; </Link>
        </p>
        <h2>
            <img src={activeUser.picture.large} height="130px"  alt="Avatar" class="avatar"></img>
        </h2>
        <ul className="nameCard">
        
    
            <li>
                
            <FaUser/>  <span>{activeUser.name.first} {activeUser.name.last}</span> 
            </li>
            <li>
                 
            <FaEnvelope/> <span>{activeUser.email}</span> 
                </li>
            <li>
                  
            <FaMobileAlt /> <span>{activeUser.cell}</span> 
            </li>
            <li>
              
            <FaGlobeAmericas /> <span>{activeUser.location.city} {activeUser.location.state}</span>
            </li>
        </ul>
        
    </div>)
}

//<FontAwesomeIcon icon= {faSmileWink} className="yellowFace" />