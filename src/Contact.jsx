import React from 'react';
import { Link } from 'react-router-dom'

const Contact = (props) => {

    return(
      <tr>
        <th><img src={props.contact.avatar_url}/></th>
        <th>{props.contact.full_name}</th>
        <th>{props.contact.email}</th>
        <th>{props.contact.street_address}</th>
        <th>{props.contact.phone_mobile_national}</th>
        <Link className="btn btn-info" to={`/send-message/${props.contact.id}`} >Send Text Message</Link>
      </tr>
    )
}

export default Contact