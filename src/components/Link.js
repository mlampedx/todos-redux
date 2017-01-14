import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const Link = ({ active, children, onClick }) => {

  return (
    <FlatButton
      label = {children}
      onClick = {e => {
        e.preventDefault();
        onClick();
      }}
      primary = {active}
    />
  )
}

export default Link;
