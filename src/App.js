import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostList from "./Components/PostList";
import Post from "./Components/Post";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
class App extends React.Component {
  render() {
    return (
      <div id="background">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/posts" component={PostList}></Route>
            <Route exact path="/posts/:id" component={Post}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
