import React from "react";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>this change done again</h1>
        <h2>this count {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
      </div>
    );
  }
}
export default hot(App);
