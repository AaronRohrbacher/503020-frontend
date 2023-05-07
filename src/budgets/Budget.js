import React from 'react'
import { readBudgets } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'
import Login from '../auth/Login'
import ListBudgets from './ListBudgets'
import CreateBudgetItem from './CreateBudgetItem'
import UpdateBudget from './UpdateBudget'
import UpdateBudgetItem from './UpdateBudgetItem'

class Budget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creatingBudget: null,
      updatingBudget: null,
      viewingBudget: null,
      budgetId: null,
      budgetItemId: null,
      submitted: null,
      userId: null,
      creatingBudgetItem: null,
      updatingBudgetItem: null,
      budgets: []
    }
    this.handleCreateBudget = this.handleCreateBudget.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.beginCreateBudget = this.beginCreateBudget.bind(this)
    this.handleCreateBudgetItem = this.handleCreateBudgetItem.bind(this)
    this.handleUpdateBudget = this.handleUpdateBudget.bind(this)
    this.handleUpdateBudgetItem = this.handleUpdateBudgetItem.bind(this)
    this.beginUpdateBudgetItem = this.beginUpdateBudgetItem.bind(this)
  }

  beginCreateBudget = () => {
    this.setState({
      creatingBudget: true,
      userId: this.state.userId
    })
  }

  beginUpdateBudget = (id) => {
    this.setState({
      updatingBudget: true,
      budgetId: id
    })
  }

  beginCreateBudgetItem = () => {
    console.log('WRONG FUCK')
    this.setState({
      creatingBudgetItem: true,
      budgetId: this.state.budgetId
    })
  }

  beginUpdateBudgetItem = (id) => {
    console.log('BEGIN FUCK')
    this.setState({
      updatingBudgetItem: true,
      budgetItemId: id
    })
  }

  handleCreateBudget = () => {
    this.setState({
      creatingBudget: false
    })
  }

  handleUpdateBudget = () => {
    this.setState({
      updatingBudget: false
    })
  }

  handleCreateBudgetItem = () => {
    this.setState({
      creatingBudgetItem: false
    })
  }

  handleUpdateBudgetItem = (id) => {
    this.setState({
      updatingBudgetItem: false
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
        {this.state.userId && !this.state.creatingBudget && !this.state.viewingBudget && !this.state.updatingBudget && <ListBudgets beginCreateBudget={this.beginCreateBudget} budgets={this.state.budgets} userId={this.state.userId} handleViewBudget={this.handleViewBudget} beginUpdateBudget={this.beginUpdateBudget} />}
        {this.state.creatingBudget && <CreateBudget userId={this.state.userId} handleCreateBudget={this.handleCreateBudget} />}
        {this.state.viewingBudget && !this.state.creatingBudgetItem && !this.state.updatingBudgetItem && <ReadBudget budgetId={this.state.budgetId} beginCreateBudgetItem={this.beginCreateBudgetItem} beginUpdateBudgetItem={this.beginUpdateBudgetItem} />}
        {this.state.creatingBudgetItem && <CreateBudgetItem userId={this.state.userId} handleCreateBudgetItem={this.handleCreateBudgetItem} budgetId={this.state.budgetId} />}
        {this.state.updatingBudget && <UpdateBudget budgetId={this.state.budgetId} userId={this.state.userId} handleUpdateBudget={this.handleUpdateBudget} />}
        {this.state.updatingBudgetItem && <UpdateBudgetItem budgetId={this.state.budgetId} budgetItemId={this.state.budgetItemId} userId={this.state.userId} handleUpdateBudgetItem={this.handleUpdateBudgetItem} />}
      </div>
    )
  }
}

export default Budget
