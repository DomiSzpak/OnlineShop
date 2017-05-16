import React from 'react';
import config from '../config.js';
import { hashHistory } from 'react-router'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameSurname: '',
      email: '',
      question: '',
      sent: false,
      timeToRedirect: 5
    }
  }

  handleNameSurnameChange=event=>{
    this.setState({
      nameSurname: event.target.value
    })
  }

  handleEmailChange=event=>{
    this.setState({
      email: event.target.value
    })
  }

  handleQuestionChange=event=>{
    this.setState({
      question: event.target.value
    })
  }

  handleBackClick=()=>{
    hashHistory.push('/')
  }

  handleFormSubmit=event=>{
    event.preventDefault()
      this.setState({
        sent: true
      })

      let interval = setInterval(()=>{
        this.setState({
          timeToRedirect: this.state.timeToRedirect - 1
        }, () => {
          if (this.state.timeToRedirect === 0) {
            clearInterval(interval)
            hashHistory.push('/')
          }
        })
      }, 1000)
    }


  render() {
    if (this.state.sent) {
      return <div className='row text-center introduction'>
      <h1>Thank you for your question.</h1>
      <p>You will be redirected to main page in {this.state.timeToRedirect} seconds...</p>
      </div>
    }
    return <div className='row fog'>
               <div className='col-md-12 col-sm-12'>
               <div className='col-md-10 form-group text-center'>
               <h3>
               Enter your question below:
               </h3>
               </div>
               <form onSubmit={this.handleFormSubmit}>
                   <div className='col-md-12'>
                       <div className='col-md-10 form-group'>
                           <input
                              type='text'
                              placeholder='name and surname'
                              className='form-control'
                              onChange={this.handleNameSurnameChange} />
                       </div>
                       <div className='col-md-10 form-group'>
                           <input
                              type='email'
                              placeholder='email'
                              className='form-control'
                              onChange={this.handEmailChange} />
                       </div>
                       <div className='col-md-10 form-group'>
                           <textarea
                              placeholder='Write your question here...'
                              className='form-control'
                              onChange={this.handleQuestionChange} />
                       </div>
                       <div className='col-md-10 form-group'>
                           <button
                               type='button'
                               className='btn btn-default btn-lg'
                               onClick={this.handleBackClick}>
                              Back
                           </button>
                           <button
                               type='submit'
                               className='btn btn-default btn-lg pull-right'>
                               Confirm
                           </button>
                       </div>
                   </div>
                 </form>
               </div>
           </div>
  }
}

export default Contact
