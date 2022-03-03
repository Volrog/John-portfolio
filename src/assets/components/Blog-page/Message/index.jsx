import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './index.module.scss';

export const Message = ( { id, title, date, keywords, text, isSinglePost } ) => (
  <li className={ isSinglePost ? '' : css.block }>
    <Link to={ `/blog/${ id }` } className={ css.link }>
      <h3 className={ css.title }>{ title }</h3>
      <ul className={ css.info }>
        <li>{ date }</li>
        <li>|</li>
        <li className={ css.keywords }>{ keywords }</li>
      </ul>
      <p>{ text }</p>
    </Link>
  </li>
)

Message.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSinglePost: PropTypes.bool,
}

Message.defaultProps = {
  isSinglePost: false,
}
