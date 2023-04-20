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
      creatingBudget: false,
    }
    this.finishCreateBudgetHandler = this.finishCreateBudgetHandler.bind(this)

  }

  finishCreateBudgetHandler = () => {
    console.log('FUCK')
    this.setState({
      creatingBudget: false
    })
  }

  ViewBudget = (id) => {
    this.setState({
      viewingBudget: true,
      budgetId: id
    })
  }

  beginCreateBudget = (id) => {
    this.setState({
      creatingBudget: true,
      userId: id
    })
  }

  Budget = ({ budgetName }) => (
    <div>
      <div>
        <p onClick={this.ViewBudget}>{budgetName}</p>
      </div>
    </div>
  )

  async componentDidMount () {
    const budgets = await readBudgets(JSON.stringify({ userId: '1a' }))
    this.setState({ budgets })
  }

  renderList() {
    return (
      <div>
        <p onClick={this.beginCreateBudget}>Create Budget</p>

        {this.state.budgets.map((budget) => (
          <this.Budget
            budgetName={`${budget.budgetName}`}
            key={`${budget.id}`}
          />
        ))}
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.state.creatingBudget === true && <CreateBudget finishCreateBudgetHandler = {this.finishCreateBudgetHandler} />}
        {this.state.creatingBudget === false && this.renderList()}
      </div>
    )
  }
}

export default ListBudgets
