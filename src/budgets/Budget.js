import React from 'react'
import { readBudgets } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'
import Login from '../auth/Login'
import ListBudgets from './ListBudgets'

class Budget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creatingBudget: null,
      viewingBudget: null,
      budgetId: null,
      submitted: null,
      userId: null,
      budgets: []
    }
    this.handleCreateBudget = this.handleCreateBudget.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.beginCreateBudget = this.beginCreateBudget.bind(this)
  }

  beginCreateBudget = () => {
    this.setState({
      creatingBudget: true,
      userId: this.state.userId
    })
  }

  handleCreateBudget = () => {
    console.log('FUCK')
    this.setState({
      creatingBudget: false
    })
  }

  handleViewBudget = (id) => {
    this.setState({
      viewingBudget: true,
      budgetId: id
    })
  }

  handleLogin = (userId) => {
    this.setState({
      creatingUser: false,
      userId
    })
  }

  render () {
    return (
      <div>
        {!this.state.userId && <Login handleLogin={this.handleLogin} />}
        {this.state.userId && !this.state.creatingBudget && !this.state.viewingBudget && <ListBudgets beginCreateBudget={this.beginCreateBudget} budgets={this.state.budgets} userId={this.state.userId} handleViewBudget={this.handleViewBudget} />}
        {this.state.creatingBudget && <CreateBudget handleCreateBudget={this.handleCreateBudget} />}
        {this.state.viewingBudget && <ReadBudget budgetId={this.state.budgetId} />}
      </div>
    )
  }
}

export default Budget
