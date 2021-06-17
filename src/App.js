import { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="app">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
