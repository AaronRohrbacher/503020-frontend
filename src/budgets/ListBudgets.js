import React from 'react'
import { readBudgets } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'
import Login from '../auth/Login'

class ListBudgets extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      budgets: [],
      creatingBudget: false
    }
  }

  ViewBudget = (id) => {
    this.setState({
      viewingBudget: true,
      budgetId: id
    })
  }

  async componentDidMount () {
    const budgets = await readBudgets(JSON.stringify({ userId: '1a' }))
    this.setState({ budgets })
  }

  async componentDidUpdate (previousState) {
    if (previousState.data !== this.state.data) {
      console.log(this.props.budgets)
      console.log(this.state.budgets)

      const budgets = await readBudgets(JSON.stringify({ userId: '1a' })).then(() => {
        this.setState({
          budgets
        })
      })
    }
  }

  Budget = ({ budgetName }) => (
    <div>
      <div>
        <p onClick={this.ViewBudget}>{budgetName}</p>
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
          />
        ))}
      </div>
    )
  }
}

export default ListBudgets
