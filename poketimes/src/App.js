// import About from "./components/About";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Post from "./components/Post";
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route exact path="/" Component={Home} />
//           <Route path="/about" Component={About} />
//           <Route path="/contact" Component={Contact} />
//           <Route path="/:post_id" Component={Post} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
