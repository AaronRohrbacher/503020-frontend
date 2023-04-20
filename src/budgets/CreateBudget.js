import React from 'react'
import { createBudget } from '../services/budgetsService'
import { render } from '@testing-library/react'
import ListBudgets from './ListBudgets'

class CreateBudget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      creatingBudget: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Use the submitted data to set the state
  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    event.key === 'Enter' && event.preventDefault()
    event.key === 'Submit' && event.preventDefault()
    this.props.finishCreateBudgetHandler
    createBudget({ budgetName: this.state.name, userId: '1a' }).then(() => {
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

            <label htmlFor="name">Budget Name:</label>
            <input
              className={'form-control-lg form-control'}
              id="name"
              name="name"
              type="text"
              placeholder="Budget Name"
              value={this.state.name} // Prop: The email input data
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
        {!this.state.submitted === true && this.renderForm()}
      </>
    )
  }
}

export default CreateBudget
