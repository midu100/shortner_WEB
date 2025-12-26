import React from "react";

const Btn = ({onClick,Name}) => {
  return (
    <>
      <button onClick={onClick} className="learn-more">
        <span aria-hidden="true" className="circle">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{Name}</span>
      </button>
    </>
  );
};

export default Btn;
