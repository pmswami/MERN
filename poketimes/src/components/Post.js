// import React, { Component } from "react";

// export class Post extends Component {
//   componentDidMount() {
//     console.log(this.props);
//     // let id = this.props.match.params.post_id;
//   }
//   render() {
//     return (
//       <div className="container">
//         <h4>Route Parameter</h4>
//       </div>
//     );
//   }
// }

// export default Post;

import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null,
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        this.setState({
          post: res.data,
        });
        //console.log(res.data);
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

export default Post;
