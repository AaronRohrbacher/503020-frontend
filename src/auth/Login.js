import React from 'react'
import { login } from '../services/usersService'
import { render } from '@testing-library/react'
// import ListBudgets from '../budgets/ListBudgets'
import Budget from '../budgets/Budget'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      mounted: null
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Use the submitted data to set the state
  handleUsernameChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handlePasswordChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    event.key === 'Enter' && event.preventDefault()
    event.key === 'Submit' && event.preventDefault()
    let token
    login({ username: this.state.username, password: this.state.password }).then((response) => {
      console.log(response)
      token = response.token.AuthenticationResult.IdToken
      this.props.handleLogin(token)
    })
  }

  componentDidMount () {
    if (Cookies.get('token')) {
      this.props.handleLogin(Cookies.get('token'))
    }
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
              onChange={this.handleUsernameChange} // Prop: Puts data into state
            />
            <label htmlFor="password">Password:</label>
            <input
              className={'form-control-lg form-control'}
              id="password"
              name="password"
              type="text"
              placeholder="Password"
              value={this.state.password} // Prop: The email input data
              onChange={this.handlePasswordChange} // Prop: Puts data into state
            />
            <button type="button" onClick={this.handleSubmit} className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}

export default Login
