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
      submitted: null,
      userId: null
    }
  }

  async componentDidMount () {
    const budgets = await readBudgets(JSON.stringify({ userId: '1a' }))
    this.setState({ budgets })
  }

  render () {
    return (
      <div>
        {!this.state.userId && <Login />}
      </div>
    )
  }
}

export default Budget
