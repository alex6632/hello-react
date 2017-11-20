import React from "react";

const Button = props => (
  <button onClick={props.onPress} className={props.selected ? 'selected' : null}>{props.label}</button>
);

const Footer = props => (
  <div className={'main-footer'}>
    <Button
      label="Complete"
      selected={props.selected === "complete"}
      onPress={props.onSelectFilter.bind(this, "complete")}
    />
    <Button
      label="New"
      selected={props.selected === "new"}
      onPress={props.onSelectFilter.bind(this, "new")}
    />
    <Button
      label="All"
      selected={props.selected === "all"}
      onPress={props.onSelectFilter.bind(this, "all")}
    />
  </div>
);
export default Footer;
