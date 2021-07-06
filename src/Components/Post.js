import React, { Component } from "react";
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";
import axios from "axios";
class Post extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    this.getPost();
  }

  async getPost() {
    const res = await axios.get(
      `http://localhost:5000/posts/${this.props.match.params.id}`
    );
    this.setState({ post: res.data });
    console.log(res.data);
  }

  //Change later to mark up language
  renderHTML() {
    let domPurify = createDomPurify(new JSDOM().window);
    return { __html: domPurify.sanitize(this.state.post.html) }; //Sanitize html so no hackers can inject
  }

  formatPost() {
    return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
  }
  formatDate(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
  }
  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <h3>{this.formatDate(this.state.post.date)}</h3>
        {this.formatPost()}
      </div>
    );
  }
}

export default Post;
