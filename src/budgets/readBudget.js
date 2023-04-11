import React from "react";
import { readBudgetItems } from "../services/budgetsService";


class ReadBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetItems: {}
    }
  }

  async componentDidMount() {
    const budgetItems = await readBudgetItems(JSON.stringify({ budgetId: "1681170857125.3193" }));
    console.log(budgetItems)
    this.setState({ budgetItems });
  }

  render() {
    return (
      <div>
                {this.state.budgetItems.currentMonth}

      </div>
    )
  }
}

export default ReadBudget;