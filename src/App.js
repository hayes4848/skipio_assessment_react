import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import * as SkipioAPI from './utils/SkipioAPI'
import ShowContacts from './ShowContacts'
import SendMessage from './SendMessage'

class App extends Component {
  
  state = {
    me: {},
    contacts: []
  }

  componentDidMount() {
    SkipioAPI.getMe()
      .then((me) => {
        this.setState({ me })
      })

      SkipioAPI.getContacts()
        .then((contacts) => {
          this.setState({ contacts })
        })
  }

  render() {
    return (
      <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/> 
        <Route exact path='/' render={() => (
          <ShowContacts me={this.state.me} contacts={this.state.contacts} /> 
        )}/>
        <Route path='/send-message/:id' component={SendMessage}/>
      </div>
    );
  }
}

export default App;
