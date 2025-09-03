import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="shimmer-line"></div>
      ))}
    </div>
  );
};

export default Shimmer;
