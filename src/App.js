import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello World!",
    };
  }
  handeleButton = (e) => {
    this.setState({
      string: "Hallelujah",
    });
  };
  render() {
    return (
      <div className="app">
        <h2>The Lord is my {this.state.string}</h2>
        <button onClick={this.handeleButton}>Chane Text</button>
      </div>
    );
  }
}

export default App;
