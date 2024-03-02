import React from 'react'
import { deleteBudgetItem, readBudgetItems } from '../services/budgetsService'

class ReadBudget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      budgetItems: [],
      budgetData: {}
    }
  }

  BudgetItem = ({ budgetItem, cost, dueDate, budgetItemId, pending, paid }) => (
    <div>
      <div>
        <p>{budgetItem}  {cost} {dueDate}</p>
        <p onClick={() => { this.props.beginUpdateBudgetItem(budgetItemId) }} >EDIT</p>
        <p onClick={() => {deleteBudgetItem({id: budgetItemId})}}>DELETE</p>
        {pending === 'true' && <p>PENDING</p>}
        {paid === 'true' && <p>PAID</p>}
      </div>
    </div>
  )

  BudgetDetails = ({
    budgetTotal,
    pre15Total,
    post15Total,
    numberOfDaysUntilNextPay,
    dailyBudget,
    bankBalance,
    estimatedMonthlyDailySpending,
    expectedIncome,
    pendingItemBalance
  }) => (
    <div>
      budgetTotal: {budgetTotal}&nbsp;
      pre15total: {pre15Total}&nbsp;
      post15Total: {post15Total}&nbsp;
      numberOfDaysUntilNextPay: {numberOfDaysUntilNextPay}&nbsp;
      dailyBudget: {dailyBudget}&nbsp;
      bankBalance: {bankBalance}&nbsp;
      estimatedMonthlyDailySpending: {estimatedMonthlyDailySpending}&nbsp;
      expectedIncome: {expectedIncome}&nbsp;
      pendingItemBalance: {pendingItemBalance}&nbsp;
    </div>
  )

  async componentDidMount () {
    const budgetItems = await readBudgetItems({ budgetId: this.props.budgetId, token: this.props.token }).then((response) => {
      console.log(response)
      this.setState({ budgetData: response })
      this.setState({ budgetItems: response.BudgetItems })
    })
  }

  render () {
    return (
      <div>
        <this.BudgetDetails
          budgetTotal={`${this.state.budgetData.budgetTotal}`}
          totalByPayPeriod={`${this.state.budgetData.totalByPayPeriod}`}
          pre15Total={`${this.state.budgetData.pre15Total}`}
          post15Total={`${this.state.budgetData.post15Total}`}
          numberOfDaysUntilNextPay={`${this.state.budgetData.numberOfDaysUntilNextPay}`}
          dailyBudget={`${this.state.budgetData.dailyBudget}`}
          bankBalance={`${this.state.budgetData.bankBalance}`}
          estimatedMonthlyDailySpending={`${this.state.budgetData.estimatedMonthlyDailySpending}`}
          expectedIncome={`${this.state.budgetData.expectedIncome}`}
          pendingItemBalance={`${this.state.budgetData.pendingItemBalance}`}

        />
        <button onClick={this.props.beginCreateBudgetItem}>New Budget Item</button>
        {this.state.budgetItems.map((item) => (
          <this.BudgetItem
            budgetItem={`${item.name}`}
            cost={`${item.cost}`}
            dueDate={`${this.state.budgetData.currentMonth} ${item.dueDate}`}
            key={`${item.id}`}
            budgetItemId={`${item.id}`}
            pending={`${item.pending}`}
            paid={`${item.paid}`}

          />
        ))}
      </div>
    )
  }
}

export default ReadBudget
