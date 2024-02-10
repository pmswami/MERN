import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["pink", "red", "blue", "green", "yellow", "orange"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";
  //   console.log(className);
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
