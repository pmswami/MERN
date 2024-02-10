// import Ninjas from "./Ninjas";

// function App() {
//   state = {
//     ninjas: [
//       { name: "Ryu", age: 30, belt: "black", id: 1 },
//       { name: "Yoshi", age: 20, belt: "green", id: 2 },
//       { name: "Crystal", age: 25, belt: "pink", id: 3 },
//     ],
//   };
//   return (
//     <div className="App">
//       <h1>My first react app</h1>
//       {/* <Ninjas name="YOSHI" age="38" belt="balck" /> */}
//       <Ninjas ninjas={this.state.ninjas} />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };

  addNinja = (newNinja) => {
    console.log(newNinja);
    newNinja.id = Math.random();
    this.setState({ ninjas: [...this.state.ninjas, newNinja] });
  };

  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter((ninja) => ninja.id !== id);
    this.setState({ ninjas: ninjas });
  };

  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
