import React from 'react'
import { createBudget } from '../services/budgetsService'
import { render } from '@testing-library/react'
import ListBudgets from './ListBudgets'

class CreateBudget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      currentBankBalance: '',
      expectedPaycheckAmount: '',
      creatingBudget: false
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeCurrentBankBalance = this.handleChangeCurrentBankBalance.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeExpectedPaycheckAmount = this.handleChangeExpectedPaycheckAmount.bind(this)
  }

  handleChangeName (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleChangeCurrentBankBalance (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleChangeExpectedPaycheckAmount (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    event.key === 'Enter' && event.preventDefault()
    event.key === 'Submit' && event.preventDefault()
    createBudget({ budgetName: this.state.name, userId: this.props.userId, currentBankBalance: this.state.currentBankBalance, expectedPaycheckAmount: this.state.expectedPaycheckAmount }).then(() => {
      this.props.handleCreateBudget()
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
              onChange={this.handleChangeName} // Prop: Puts data into state
            />
            <label htmlFor="name">currentBankBalance:</label>
            <input
              className={'form-control-lg form-control'}
              id="currentBankBalance"
              name="currentBankBalance"
              type="text"
              placeholder="Current Bank Balance"
              value={this.state.currentBankBalance} // Prop: The email input data
              onChange={this.handleChangeCurrentBankBalance} // Prop: Puts data into state
            />
            <label htmlFor="name">expectedPaycheckAmount:</label>
            <input
              className={'form-control-lg form-control'}
              id="expectedPaycheckAmount"
              name="expectedPaycheckAmount"
              type="text"
              placeholder="Current Bank Balance"
              value={this.state.expectedPaycheckAmount} // Prop: The email input data
              onChange={this.handleChangeExpectedPaycheckAmount} // Prop: Puts data into state
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
