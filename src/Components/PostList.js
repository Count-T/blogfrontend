import React, { Component } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
class PostList extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.setState({ posts: [] }); //reset the order
    this.getPosts();
  }
  async getPosts() {
    const res = await axios.get("https://blogtony.herokuapp.com/posts"); //Change this with website later
    console.log(res);
    this.setState({ posts: res.data });
    this.setState({ posts: this.state.posts.reverse() });
  }

  renderList() {
    return this.state.posts.map((post) => {
      return <PostListItem key={post._id} post={post}></PostListItem>;
    });
  }
  render() {
    return <div className="slowfade-in">{this.renderList()}</div>;
  }
}
export default PostList;
