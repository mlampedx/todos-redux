import React, { PropTypes } from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <p className = 'centered-elem'>
    <span>SHOW:
     {' '}
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </span>
  </p>
)

export default Footer;
