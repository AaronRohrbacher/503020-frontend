import React from 'react'
import { readBudgetItem, updateBudgetItem } from '../services/budgetsService'

class UpdateBudgetItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      dueDate: '',
      cost: '',
      pending: false
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeCost = this.handleChangeCost.bind(this)
    this.handleChangeDueDate = this.handleChangeDueDate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangePendingChecked = this.handleChangePendingChecked.bind(this)
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

  handleChangePendingChecked (event) {
    const { name, value } = event.target
    this.setState({
      [name]: !this.state.pending
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
      dueDate: this.state.dueDate,
      pending: this.state.pending,
      token: this.props.token
    }).then(() => {
      this.props.handleUpdateBudgetItem()
      this.setState({
        submitted: true
      })
    })
  }

  async componentDidMount () {
    const budgetItem = await readBudgetItem({ id: this.props.budgetItemId, budgetId: this.props.budgetId, token: this.props.token }).then((response) => {
      this.setState({
        name: response[0].name,
        cost: response[0].cost,
        dueDate: response[0].dueDate,
        pending: response[0].pending
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
            <label htmlFor="pending">pending:</label>
            <input onChange={this.handleChangePendingChecked} name="pending" checked={this.state.pending} style ={{ defaultChecked: this.state.pending }} type="checkbox" />
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
