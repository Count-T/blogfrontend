import React, { Component } from "react";
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";
import axios from "axios";
import "../App.scss";
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
        <div className="mainpost-title">{this.state.post.title}</div>
        <div className="mainpost-date">
          {this.formatDate(this.state.post.date)}
        </div>
        <img
          className="mainpost-image"
          src={this.state.post.imageUrl}
          alt="missing"
        />
        <br />
        <div className="mainpost-content-centre ">
          <p className="mainpost-content">{this.formatPost()}</p>
        </div>
      </div>
    );
  }
}

export default Post;
