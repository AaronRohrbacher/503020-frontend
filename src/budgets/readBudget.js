import React from 'react'
import { readBudgetItems } from '../services/budgetsService'

class ReadBudget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budgetItems: [],
      budgetData: {}
    }
  }

  BudgetItem = ({ budgetItem, cost, dueDate, budgetItemId, pending }) => (
    <div>
      <div>
        <p>{budgetItem}{budgetItemId}</p>
        <p>{cost} {dueDate}</p>
        <p onClick={() => { this.props.beginUpdateBudgetItem(budgetItemId) }} >EDIT</p>
        {pending === "true" && <p>PENDING</p>}
      </div>
    </div>
  )

  BudgetDetails = ({
    budgetTotal,
    totalByPayPeriod,
    numberOfDaysUntilNextPay,
    dailyBudget,
    bankBalance,
    estimatedMonthlyDailySpending,
    expectedIncome,
    pendingItemBalance
  }) => (
    <div>
      budgetTotal: {budgetTotal}
      totalByPayPeriod: {totalByPayPeriod}
      numberOfDaysUntilNextPay: {numberOfDaysUntilNextPay}
      dailyBudget: {dailyBudget}
      bankBalance: {bankBalance}
      estimatedMonthlyDailySpending: {estimatedMonthlyDailySpending}
      expectedIncome: {expectedIncome}
      pendingItemBalance: {pendingItemBalance}

    </div>
  )

  async componentDidMount() {
    const budgetItems = await readBudgetItems(JSON.stringify({ budgetId: this.props.budgetId }))
    this.setState({ budgetData: budgetItems })
    this.setState({ budgetItems: budgetItems.BudgetItems })
  }

  render() {
    return (
      <div>
        <this.BudgetDetails
          budgetTotal={`${this.state.budgetData.budgetTotal}`}
          totalByPayPeriod={`${this.state.budgetData.totalByPayPeriod}`}
          numberOfDaysUntilNextPay={`${this.state.budgetData.numberOfDaysUntilNextPay}`}
          dailyBudget={`${this.state.budgetData.dailyBudget}`}
          bankBalance={`${this.state.budgetData.bankBalance}`}
          estimatedMonthlyDailySpending={`${this.state.budgetData.estimatedMonthlyDailySpending}`}
          expectedIncome={`${this.state.budgetData.expectedIncome}`}
          pendingItemBalance={`${this.state.budgetData.pendingItemBalance}`}

        />
        <p onClick={this.props.beginCreateBudgetItem}>Create BudgetItem</p>
        {this.state.budgetItems.map((item) => (
          <this.BudgetItem
            budgetItem={`${item.name}`}
            cost={`${item.cost}`}
            dueDate={`${this.state.budgetData.currentMonth} ${item.dueDate}`}
            key={`${item.id}`}
            budgetItemId={`${item.id}`}
            pending={`${item.pending}`}
          />
        ))}
      </div>
    )
  }
}

export default ReadBudget
