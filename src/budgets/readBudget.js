import React from 'react'
import { readBudgetItems } from '../services/budgetsService'

class ReadBudget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      budgetItems: [],
      budgetData: {}
    }
  }

  BudgetItem = ({ budgetItem, cost, dueDate }) => (
    <div>
      <div>
        <p>{budgetItem}</p>
        <p>{cost} {dueDate}</p>
      </div>
    </div>
  )

  async componentDidMount () {
    const budgetItems = await readBudgetItems(JSON.stringify({ budgetId: this.props.budgetId }))
    this.setState({ budgetData: budgetItems })
    this.setState({ budgetItems: budgetItems.BudgetItems })
  }

  render () {
    return (
      <div>
        {this.state.budgetItems.map((item) => (
          <this.BudgetItem
            budgetItem={`${item.name}`}
            cost={`${item.cost}`}
            dueDate={`${this.state.budgetData.currentMonth} ${item.dueDate}`}
            key={`${item.id}`}
          />
        ))}
      </div>
    )
  }
}

export default ReadBudget
