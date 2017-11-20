import React from "react";

const Item = props => {
  return (
      <div onClick={props.onPress} className={props.complete ? 'completed': null}>
        {props.label}
      </div>
  );
};

export default Item;
