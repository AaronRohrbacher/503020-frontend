import React from "react";
// import Slide from 'react-reveal';
import { readBudgets } from "../services/budgetsService";
import ReadBudget from "./readBudget"



class ListBudgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: []
    }
  }

  
  
  ViewBudget = (id) => {
    this.setState({
      viewingBudget: true,
      budgetId: id
    })
  }

  Budget = ({ budgetName }) => (
    <div>
      <div>
        <p onClick={this.ViewBudget}>{budgetName}</p>
      </div>
    </div>
  );

  

  async componentDidMount() {
    const budgets = await readBudgets(JSON.stringify({ userId: "1a" }));
    console.log(budgets)
    this.setState({ budgets });
  }

  render() {
    // The markup for the Step 1 UI
    return (
      <div>

        {this.state.budgets.map((budget) => (
          <this.Budget
            budgetName={`${budget.budgetName}`}
          />
        ))}
      {this.state.viewingBudget && <ReadBudget />}
      </div>

    )

  }
}

export default ListBudgets;