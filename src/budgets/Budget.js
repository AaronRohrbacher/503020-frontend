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
        {console.log(this.state.userId)}
        {!this.state.userId && <Login />}
        {this.state.creatingBudget && !this.state.submitted && <CreateBudget />}
        {this.state.viewingBudget && <ReadBudget />}
      </div>
    )
  }
}

export default Budget
