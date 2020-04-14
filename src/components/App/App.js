import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    airline: "",
  };

  handleChangeEvent = (event) => {
    this.setState(
      {
        airline: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmitEvent = () => {
    this.props.dispatch({ type: "ADD_AIRLINE", payload: this.state.airline });
    this.setState({
      airline: "",
    });
  };

  render() {
    console.log(this.props.store.airlineReducer);

    const airlineArray = this.props.store.airlineReducer.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
        </tr>
      );
    });

    return (
      <div>
        <h1>Redux Airport</h1>
        <input
          onChange={this.handleChangeEvent}
          value={this.state.airline}
          placeholder="Airline Name"
        />
        <button onClick={this.handleSubmitEvent}>Add Airline</button>
        <table>
          <thead>
            <tr>
              <th>AIRLINE</th>
            </tr>
          </thead>
          <tbody>{airlineArray}</tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
