// import React from "react";

// function Contact(props) {
//   // setTimeout(() => {
//   //   props.history.push("/about");
//   // }, 2000);
//   // console.log(props);
//   return (
//     <div className="container">
//       <h4 className="center">Contact</h4>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
//         quibusdam consectetur accusamus officia, omnis ipsa dolorem molestiae
//         minus ipsum tenetur esse! Excepturi soluta incidunt deserunt dolorum
//         eaque, sapiente fuga alias.
//       </p>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import Rainbow from "../hoc/Rainbow";

const Contact = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repudiandae repellat illo magni eligendi cupiditate voluptates eius
          nam voluptate. Incidunt nihil ullam quae quia officia quaerat,
          deserunt eligendi explicabo totam?
        </p>
      </div>
    </div>
  );
};

export default Rainbow(Contact);
