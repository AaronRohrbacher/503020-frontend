import React from 'react'
import { createUser } from '../services/usersService'
import { render } from '@testing-library/react'
import ListBudgets from './ListBudgets'

class CreateUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creatingBudget: true,
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Use the submitted data to set the state
  handleChange (event) {
    const { username, value } = event.target
    const { password, value } = event.target
    this.setState({
      [username]: username,
      [password]: password
    })
    console.log(username, value)
  }

  handleSubmit (event) {
    event.preventDefault()
    event.key === 'Enter' && event.preventDefault()
    event.key === 'Submit' && event.preventDefault()
    createUser({ username: this.state.username, password: this.state.password }).then(() => {
      this.setState({
        creatingBudget: false,
        submitted: true
      })
    })
  }

  renderForm () {
    return (
      <div>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="username">Email:</label>
            <input
              className={'form-control-lg form-control'}
              id="username"
              name="username"
              type="text"
              placeholder="Email Address"
              value={this.state.username} // Prop: The email input data
              onChange={this.handleChange} // Prop: Puts data into state
            />
           <button type="button" onClick={this.handleSubmit} className="btn btn-success btn-block">Submit</button>

          </form>
        </div>
      </div>
    )
  }

  render () {
    return (
      <>
        {!this.state.submitted && this.renderForm()}
        {this.state.creatingBudget === false && <ListBudgets />}
      </>
    )
  }
}

export default CreateBudget
