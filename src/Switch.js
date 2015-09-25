import React from 'react/addons';
import './switch.css';

const Switch = React.createClass({
  getDefaultProps() {
    return {
      defaultChecked: false,
      onChange: () => {}
    };
  },
  getInitialState() {
    return {
      checked: this.props.checked || this.props.defaultChecked || false
    };
  },
  render() {
    let
      cx = React.addons.classSet,
      classes = cx({
        'icon-switch': true,
        'active': this.state.checked
      });
    return (
      <i className={classes} onClick = {this.toggle}></i>
    );
  },
  toggle() {
    let checked = !this.state.checked;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }
});

export default Switch;