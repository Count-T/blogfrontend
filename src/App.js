import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostList from "./Components/PostList";
import Post from "./Components/Post";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={PostList}></Route>
          <Route exact path="/posts/:id" component={Post}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
