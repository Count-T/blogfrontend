import React, { Component } from "react";

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
    return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
  }
  formatTags(tags) {
    return tags.map((tag) => {
      return <span key={tag}>{tag}</span>;
    });
  }
  onClick(e) {
    e.preventDefault();
    window.location.pathname = `/posts/${this.props.post._id}`;
  }
  render() {
    const { post } = this.props;
    return (
      <button onClick={this.onClick}>
        <h3>{post.title}</h3>
        <div>{this.formatTags(post.tags)}</div>
        <span>{this.formatDate(post.date)}</span>
        <br />
        <img src={post.imageUrl} alt="missing" />
      </button>
    );
  }
}

export default PostListItem;
