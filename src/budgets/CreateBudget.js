import React from "react";
import { createBudget } from "../services/budgetsService";
import { render } from "@testing-library/react";

class CreateBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  // Trigger an alert on form submission
  handleSubmit(event) {
    this.setState({
      creatingBudget: false,
      submitted: true
    });
    event.key === 'Enter' && event.preventDefault();
    createBudget({budgetName: this.state.name, userId: '1a'})
  }

  handleKeyPress = (event) => {
    event.key === 'Enter' && event.preventDefault();
  }


  renderForm() {
    return (
      <div>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="name">Budget Name:</label>
            <input
              onKeyPress={this.props.handleKeyPress}
              className={`form-control-lg form-control`}
              id="name"
              name="name"
              type="text"
              placeholder="Budget Name"
              value={this.state.name} // Prop: The email input data
              onChange={this.handleChange} // Prop: Puts data into state
            />
           <button onClick={this.handleSubmit} className="btn btn-success btn-block">Submit</button>

          </form>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.state.submitted)
    const { status } = this.state;
    const submitted = status === true;
    return (
      <>
        {!submitted && this.renderForm()}
        {submitted && <p>Thank you! We will talk to you soon!</p>}
      </>
    );
  }
  
}


export default CreateBudget;