// import React from "react";

// function Home() {

//   return (
//     <div className="container">
//       <h4 className="center">Home</h4>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
//         quibusdam consectetur accusamus officia, omnis ipsa dolorem molestiae
//         minus ipsum tenetur esse! Excepturi soluta incidunt deserunt dolorum
//         eaque, sapiente fuga alias.
//       </p>
//     </div>
//   );
// }

// export default Home;

import React, { Component } from "react";
import axios from "axios";

export class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // console.log(res);
      this.setState({ posts: res.data.slice(0, 10) });
      console.log(this.state.posts);
    });
  }
  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts yet!</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    );
  }
}

export default Home;
