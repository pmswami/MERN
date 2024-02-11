import React, { Component } from "react";

export class Post extends Component {
  componentDidMount() {
    console.log(this.props);
    // let id = this.props.match.params.post_id;
  }
  render() {
    return (
      <div className="container">
        <h4>Route Parameter</h4>
      </div>
    );
  }
}

export default Post;
