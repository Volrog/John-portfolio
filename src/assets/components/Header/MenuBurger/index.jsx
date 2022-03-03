import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

export const MenuBurger = ({ menuIsOpen, handleClick }) => (
  <div 
  className = { menuIsOpen ? `${ css.block } ${ css.active }` : css.block } 
  onClick = { handleClick }
  >
    <div className = { menuIsOpen ? `${ css.midLine } ${ css.active }` : css.midLine }></div>
  </div>
)

MenuBurger.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}