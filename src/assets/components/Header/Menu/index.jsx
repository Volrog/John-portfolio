import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import { NavLink } from 'react-router-dom';


export const Menu = ({ menuIsOpen, handleClick }) => (
  <nav className = { menuIsOpen ? `${ css.block } ${ css.open }` : css.block }>
    <NavLink to = "/" className = { css.item } onClick = { handleClick }>Home</NavLink>
    <NavLink to = "/works" className = { css.item } onClick = { handleClick }>Works</NavLink>
    <NavLink to = "/blog" className = { css.item } onClick = { handleClick }>Blog</NavLink>
    <NavLink to = "/contact" className = { css.item } onClick = { handleClick }>Contact</NavLink>
  </nav>
)

Menu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

