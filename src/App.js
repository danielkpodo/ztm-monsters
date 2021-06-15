import { Component } from "react";
import faker from "faker";
import "./App.css";

const monsters = [...Array(10)].map((monster) => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  };
});

class App extends Component {
  state = {
    monsters,
  };

  render() {
    console.log(this.state.monsters);
    return (
      <div className="app">
        {this.state.monsters.map((monster) => {
          return <li key={monster.id}>{monster.id}</li>;
        })}
      </div>
    );
  }
}

export default App;
