import { Component } from "react";
import faker from "faker";
import "./App.css";

const monsters = [...Array(10)].map((monster) => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    image: faker.image.imageUrl(),
  };
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    handleDataRequest("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        this.setState({ monsters: users, isLoading: true });
      })
      .catch((err) => {
        throw new Error("Can't return data from url");
      });
  }

  dynamicContent = () => {
    if (this.state.isLoading) {
      return this.state.monsters.map((monster) => {
        return <li key={monster.id}>{monster.name}</li>;
      });
    } else {
      return <p>Lodaing...</p>;
    }
  };

  render() {
    console.log(this.state.monsters);
    return <div className="app">{this.dynamicContent()}</div>;
  }
}

export default App;

const handleDataRequest = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
