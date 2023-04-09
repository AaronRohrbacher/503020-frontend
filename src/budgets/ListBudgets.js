import React from "react";
// import Slide from 'react-reveal';
import { getUserBudgets } from "../services/budgetsService";

const Budget = ({ budgetName }) => (
  <div>
    <div>
      <p>{budgetName}</p>
    </div>
  </div>
);

class ListBudgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: []
    }
  }

  async componentDidMount() {
    const budgets = await getUserBudgets(JSON.stringify({ userId: "1a" }));
    console.log(budgets)
    this.setState({ budgets });
    console.log(this.state.budgets)
  }

  render() {
    // The markup for the Step 1 UI
    return (
      <div>

        {this.state.budgets.map((budget) => (
          <Budget
            budgetName={`${budget.budgetName}`}
          />
        ))}

        </div>
    )
  }
}

export default ListBudgets;