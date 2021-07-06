import React, { Component } from "react";
import axios from "axios";
import PostListItem from "./PostListItem";
class PostList extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.getPosts();
  }
  async getPosts() {
    const res = await axios.get("http://localhost:5000/posts/");
    console.log(res);
    this.setState({ posts: res.data });
  }

  renderList() {
    return this.state.posts.map((post) => {
      return <PostListItem key={post._id} post={post}></PostListItem>;
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default PostList;
