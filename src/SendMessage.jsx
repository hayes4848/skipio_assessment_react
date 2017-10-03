import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as SkipioAPI from './utils/SkipioAPI'

class SendMessage extends Component {

  state={
    id: this.props.match.params.id,
    value: ''
  }
  
  submitMessage(event){
    event.preventDefault()
    SkipioAPI.sendMessage(this.state.value, this.state.id)
    this.props.history.push("/")
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div className="message-container">
        <div>Your Message (limit:  characters)</div>
        <form className="" name="" onSubmit={this.submitMessage.bind(this)} >
          <textarea name="message-text" cols="50" row="10" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <div className="row">
            <input className="btn btn-info" type='submit' value='Send Message'/>
          </div>
        </form>
      </div>
    )
  }
}

export default SendMessage