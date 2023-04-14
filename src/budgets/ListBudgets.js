import React from 'react'
import { readBudgets } from '../services/budgetsService'
import ReadBudget from './readBudget'
import CreateBudget from './CreateBudget'

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

  renderList () {
    return (
      <div>
        <p onClick={this.beginCreateBudget}>Create Budget</p>

        {this.state.budgets.map((budget) => (
          <this.Budget
            budgetName={`${budget.budgetName}`}
          />
        ))}
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.state.creatingBudget === false && this.renderList()}
        {this.state.creatingBudget && !this.state.submitted && <CreateBudget />}
        {this.state.viewingBudget && <ReadBudget />}
      </div>
    )
  }
}

export default ListBudgets
