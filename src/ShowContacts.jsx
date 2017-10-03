import React, { Component } from 'react';
import Contact from './Contact'
// import sortBy from 'sort-by'

class ShowContacts extends Component {

  render() {

      let newContacts = this.props.contacts.map((contact, index) => {
        return <Contact contact={contact} key={index} />
      })

    return(
      <div className="contacts-container">
        <div className="row well">
          <div className="col-sm-3">
            <img className="rounded-circle" src={this.props.me.avatar_image_url} />
            <h3>{this.props.me.first_name} {this.props.me.last_name}</h3>
          </div>
          <div className="col-sm-9 top-justify">
            <div className="row">
              <h5 className="col-sm-4">Phone Number: { this.props.me.skipio_phone_number }</h5>
              <h5 className="col-sm-4">Time Zone: { this.props.me.time_zone }</h5>
            </div>
            <div className="row">
              <h5 className="col-sm-4">Unread Messages: { this.props.me.unread_count }</h5>
              <h5 className="col-sm-4">Current Contacts: { this.props.me.contacts_count }</h5>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contacts.length >= 1 &&
                newContacts
            }
          </tbody>  
        </table>
      </div>
    )
  }
}

export default ShowContacts