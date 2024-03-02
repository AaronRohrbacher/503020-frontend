import React from 'react'
import { deleteBudgetItem, readBudgetItems } from '../services/budgetsService'

class ReadBudget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budgetItems: [],
      budgetData: {}
    }
  }

  BudgetItem = ({ budgetItem, cost, dueDate, budgetItemId, pending, paid }) => (
      <p>{budgetItem}  {cost} {dueDate}
        <button onClick={() => { this.props.beginUpdateBudgetItem(budgetItemId) }} >EDIT</button>
        <button onClick={() => { deleteBudgetItem({ id: budgetItemId }) }}>DELETE</button>
        {pending === 'true' && <span>PENDING&nbsp;</span>}
        {paid === 'true' && <span>PAID</span>}
      </p>
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
    <p>Current Discresionary Budget per Day: {dailyBudget}<br />
      Total Monthly Expenditures: {budgetTotal}<br />
      First of the Month: {pre15Total}<br />
      15th of the Month: {post15Total}<br />
      Next pay day: {numberOfDaysUntilNextPay}&nbsp Days <br />
      Current Bank Balance: {bankBalance}<br />
      Estimated Total Monthly Budget: {estimatedMonthlyDailySpending}<br />
      Total Monthly Income: {expectedIncome}<br />
      Pending Item Balance: {pendingItemBalance}<br /></p>
  )

  async componentDidMount() {
    const budgetItems = await readBudgetItems({ budgetId: this.props.budgetId, token: this.props.token }).then((response) => {
      console.log(response)
      this.setState({ budgetData: response })
      this.setState({ budgetItems: response.BudgetItems })
    })
  }

  render() {
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center'>
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
        </div>
        <div className='col-md-6'>
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
      </div>
      </div>
    )
  }
}

export default ReadBudget
