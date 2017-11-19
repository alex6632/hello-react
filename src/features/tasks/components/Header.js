import React from "react";
import Input from "./Input";

const Header = props => (
  <div className={'main-header'}>
    <Input onAdd={props.onAdd} />
  </div>
);
export default Header;
