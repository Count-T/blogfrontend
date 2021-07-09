import React, { Component } from "react";
import "../App.css";
class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
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
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }
  formatTags(tags) {
    return tags.map((tag) => {
      return <span key={tag}>{tag}, </span>;
    });
  }
  onClick(e) {
    e.preventDefault();
    window.location.pathname = `/posts/${this.props.post._id}`;
  }
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <button className="postborders" onClick={this.onClick}>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-tags">{this.formatTags(post.tags)}</div>
          <span>{this.formatDate(post.date)}</span>
          <br />
          <img className="post-image" src={post.imageUrl} alt="missing" />
        </button>
      </div>
    );
  }
}

export default PostListItem;
