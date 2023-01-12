import React from "react";

const Button = ({ submit, value, outlined, w100, full, onClick, shadow }) => {
  const buttonClasses = `button ${outlined && "button--outlined"} ${
    full && "button--full"
  } ${w100 && "button--w100"} ${shadow && "button--shadow"}`;

  const buttonType = submit ? "submit" : "button";

  return (
    <button className={buttonClasses} type={buttonType} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
