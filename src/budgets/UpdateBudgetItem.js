import React from 'react'
import { readBudgetItem, updateBudgetItem } from '../services/budgetsService'

import { render } from '@testing-library/react'
import ListBudgets from './ListBudgets'

class UpdateBudgetItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      dueDate: '',
      cost: ''
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeCost = this.handleChangeCost.bind(this)
    this.handleChangeDueDate = this.handleChangeDueDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleChangeDueDate (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleChangeCost (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    event.key === 'Enter' && event.preventDefault()
    event.key === 'Submit' && event.preventDefault()
    updateBudgetItem({
      name: this.state.name,
      id: this.props.budgetItemId,
      budgetId: this.props.budgetId,
      cost: this.state.cost,
      dueDate: this.state.dueDate
    }).then(() => {
      this.props.handleUpdateBudgetItem()
      this.setState({
        submitted: true
      })
    })
  }

  async componentDidMount () {
    console.log('MOUNT')
    console.log(this.props.budgetItemId)
    const budgetItem = await readBudgetItem(JSON.stringify({ id: this.props.budgetItemId, budgetId: this.props.budgetId })).then((response) => {
      console.log(response)
      this.setState({
        name: response[0].name,
        cost: response[0].cost,
        dueDate: response[0].dueDate
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
              placeholder="Name"
              value={this.state.name} // Prop: The email input data
              onChange={this.handleChangeName} // Prop: Puts data into state
            />
            <label htmlFor="cost">cost:</label>
            <input
              className={'form-control-lg form-control'}
              id="cost"
              name="cost"
              type="text"
              placeholder="cost"
              value={this.state.cost} // Prop: The email input data
              onChange={this.handleChangeCost} // Prop: Puts data into state
            />
            <label htmlFor="dueDate">dueDate:</label>
            <input
              className={'form-control-lg form-control'}
              id="dueDate"
              name="dueDate"
              type="text"
              placeholder="dueDate"
              value={this.state.dueDate} // Prop: The email input data
              onChange={this.handleChangeDueDate} // Prop: Puts data into state
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

export default UpdateBudgetItem
