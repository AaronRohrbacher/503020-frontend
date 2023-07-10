import React from 'react'
import { readBudgets } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'
import Login from '../auth/Login'
import ListBudgets from './ListBudgets'
import CreateBudgetItem from './CreateBudgetItem'
import UpdateBudget from './UpdateBudget'
import UpdateBudgetItem from './UpdateBudgetItem'
import jwt_decode from 'jwt-decode'
import { BrowserRouter, Route, Routes, Switch, Navigate } from 'react-router-dom'

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
      token: null,
      creatingBudgetItem: null,
      updatingBudgetItem: null,
      budgets: [],
      userId: null
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
      creatingBudget: true
    })
  }

  beginUpdateBudget = (id) => {
    this.setState({
      updatingBudget: true,
      budgetId: id
    })
  }

  beginCreateBudgetItem = () => {
    this.setState({
      creatingBudgetItem: true,
      budgetId: this.state.budgetId
    })
  }

  beginUpdateBudgetItem = (id) => {
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

  handleLogin = (token) => {
    this.setState({
      creatingUser: false,
      token,
      userId: jwt_decode(token).sub
    })
  }

  render () {
    return (
      <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={!this.state.token && <Login handleLogin={this.handleLogin} token={this.state.token} />}>
              <Route path="/listBudgets" element={this.state.token && !this.state.creatingBudget && !this.state.viewingBudget && !this.state.updatingBudget && <ListBudgets beginCreateBudget={this.beginCreateBudget} budgets={this.state.budgets} token={this.state.token} userId={this.state.userId} handleViewBudget={this.handleViewBudget} beginUpdateBudget={this.beginUpdateBudget} />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {this.state.creatingBudget && <CreateBudget token={this.state.token} userId={this.state.userId} handleCreateBudget={this.handleCreateBudget} />}
        {this.state.viewingBudget && !this.state.creatingBudgetItem && !this.state.updatingBudgetItem && <ReadBudget budgetId={this.state.budgetId} beginCreateBudgetItem={this.beginCreateBudgetItem} beginUpdateBudgetItem={this.beginUpdateBudgetItem} token={this.state.token} />}
        {this.state.creatingBudgetItem && <CreateBudgetItem token={this.state.token} handleCreateBudgetItem={this.handleCreateBudgetItem} budgetId={this.state.budgetId} />}
        {this.state.updatingBudget && <UpdateBudget budgetId={this.state.budgetId} userId={this.state.userId} token={this.state.token} handleUpdateBudget={this.handleUpdateBudget} />}
        {this.state.updatingBudgetItem && <UpdateBudgetItem budgetId={this.state.budgetId} budgetItemId={this.state.budgetItemId} token={this.state.token} handleUpdateBudgetItem={this.handleUpdateBudgetItem} />}
        {this.props.token &&
          <Navigate to="/listBudgets" replace={true} />
        }

      </div>
    )
  }
}

export default Budget
