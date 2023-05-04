import React from 'react'
import { readBudgets } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'
import Login from '../auth/Login'
import ListBudgets from './ListBudgets'
import CreateBudgetItem from './CreateBudgetItem'

class Budget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creatingBudget: null,
      viewingBudget: null,
      budgetId: null,
      submitted: null,
      userId: null,
      creatingBudgetItem: null,
      budgets: []
    }
    this.handleCreateBudget = this.handleCreateBudget.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.beginCreateBudget = this.beginCreateBudget.bind(this)
    this.handleCreateBudgetItem = this.handleCreateBudgetItem.bind(this)
  }

  beginCreateBudget = () => {
    this.setState({
      creatingBudget: true,
      userId: this.state.userId
    })
  }

  beginCreateBudgetItem = () => {
    this.setState({
      creatingBudgetItem: true,
      budgetId: this.state.budgetId
    })
  }

  handleCreateBudget = () => {
    this.setState({
      creatingBudget: false
    })
  }

  handleCreateBudgetItem = () => {
    this.setState({
      creatingBudgetItem: false
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
        {this.state.creatingBudget && <CreateBudget userId={this.state.userId} handleCreateBudget={this.handleCreateBudget} />}
        {this.state.viewingBudget && !this.state.creatingBudgetItem && <ReadBudget budgetId={this.state.budgetId} beginCreateBudgetItem={this.beginCreateBudgetItem} />}
        {this.state.creatingBudgetItem && <CreateBudgetItem userId={this.state.userId} handleCreateBudgetItem={this.handleCreateBudgetItem} budgetId={this.state.budgetId} />}
      </div>
    )
  }
}

export default Budget
