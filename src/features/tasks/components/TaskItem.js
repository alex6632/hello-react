import React from "react";

const Item = props => {
  return (
    <ul>
      <li onClick={props.onPress} className={props.complete ? 'completed': null}>
        {props.label}
      </li>
    </ul>
  );
};

export default Item;
