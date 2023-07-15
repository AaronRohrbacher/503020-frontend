import React from 'react'
import { readBudgets, readBudgetItems } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'
import Login from '../auth/Login'
import UpdateBudget from './UpdateBudget'

class ListBudgets extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      budgets: [],
      creatingBudget: false,
      budgetId: null
    }
  }

  async componentDidMount () {
    const budgets = await readBudgets({ userId: this.props.userId, token: this.props.token })
    this.setState({ budgets })
  }

  async componentDidUpdate (previousState) {
    if (previousState.budgets !== this.state.budgets) {
      const budgets = await readBudgets({ userId: this.props.userId }).then(() => {
        this.setState({
          budgets
        })
      })
    }
  }

  Budget = ({ budgetName, budgetId }) => (
    <div>
      <div>
        <p onClick={() => { this.props.handleViewBudget(budgetId) }}>{budgetName}{budgetId}</p><p onClick={() => { this.props.beginUpdateBudget(budgetId) }} >EDIT</p><p onClick={() => { this.deleteBudget(budgetId) }}>DELETE</p>
      </div>
    </div>
  )

  render () {
    return (
      <div>
        <p onClick={this.props.beginCreateBudget}>Create Budget</p>
        {this.state.budgets.map((budget) => (
          <this.Budget
            budgetName={`${budget.budgetName}`}
            key={`${budget.id}`}
            budgetId={`${budget.id}`}
          />
        ))}
        {this.props.viewingBudget === true && <ReadBudget budgetId={this.state.budgetId} /> }
      </div>
    )
  }
}

export default ListBudgets
