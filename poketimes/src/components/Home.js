// // import React from "react";

// // function Home() {

// //   return (
// //     <div className="container">
// //       <h4 className="center">Home</h4>
// //       <p>
// //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
// //         quibusdam consectetur accusamus officia, omnis ipsa dolorem molestiae
// //         minus ipsum tenetur esse! Excepturi soluta incidunt deserunt dolorum
// //         eaque, sapiente fuga alias.
// //       </p>
// //     </div>
// //   );
// // }

// // export default Home;

// import React, { Component } from "react";
// import axios from "axios";
// import Pokeball from "../pokeball.png";
// import { Link } from "react-router-dom";

// export class Home extends Component {
//   state = {
//     posts: [],
//   };

//   componentDidMount() {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//       // console.log(res);
//       this.setState({ posts: res.data.slice(0, 10) });
//       console.log(this.state.posts);
//     });
//   }
//   handleClick(id) {
//     console.log(id);
//   }
//   render() {
//     const { posts } = this.state;
//     const postsList = posts.length ? (
//       posts.map((post) => {
//         return (
//           <div
//             className="post card"
//             key={post.id}
//             onClick={() => this.handleClick(post.id)}
//           >
//             <div className="card-content">
//               <img src={Pokeball} alt="A Pokeball" />
//               <Link>
//                 <span className="card-title">{post.title}</span>
//               </Link>
//               <p>{post.body}</p>
//             </div>
//           </div>
//         );
//       })
//     ) : (
//       <div className="center">No Posts yet!</div>
//     );
//     return (
//       <div className="container">
//         <h4 className="center">Home</h4>
//         {postsList}
//       </div>
//     );
//   }
// }

// export default Home;

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

export default Home;
