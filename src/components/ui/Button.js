import React from "react";
import "./Button.scss";

const Button = ({ icon: Icon, name, bgColor }) => {
  console.log(Icon);

  return (
    <button
      className='custom-button'
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      {Icon && <Icon className='button-icon' />}
      <span className='button-text'>{name}</span>
    </button>
  );
};

export default Button;
