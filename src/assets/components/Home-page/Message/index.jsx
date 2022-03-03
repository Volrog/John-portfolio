import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './index.module.scss';

export const Message = ( { id, title, date, keywords, text } ) => (
  <li className={ css.block }>
    <Link to={ `/blog/${ id }` } className={ css.link }>
      <div className={ css.container }>
        <h3 className={ css.title }>{ title }</h3>
        <ul className={ css.info }>
          <li>{ date }</li>
          <li>|</li>
          <li>{ keywords }</li>
        </ul>
        <p>{ text }</p>
      </div>
    </Link>
  </li>
)

Message.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}