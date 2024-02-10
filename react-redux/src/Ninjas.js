// import React, { Component } from "react";

// class Ninjas extends Component {
//   render() {
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map((ninja) => {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div>Name: {ninja.name}</div>
//           <div>AGe: {ninja.age}</div>
//           <div>Belt: {ninja.belt}</div>
//         </div>
//       );
//     });
//     return (
//       <div className="ninja">
//         {/* <div>Name: {this.props.name}</div>
//         <div>AGe: {this.props.age}</div>
//         <div>Belt: {this.props.belt}</div> */}
//         {ninjaList}
//       </div>
//     );
//   }
// }

// export default Ninjas;

import React from "react";

function Ninjas({ ninjas }) {
  //   const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    );
  });
  return <div className="ninja">{ninjaList}</div>;
}

export default Ninjas;
