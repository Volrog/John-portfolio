import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

export const WorksItem = ( { img, imgAlt, title, date, topic, text } ) => {
  return(
  <li className={ css.block }>
    <img className={ css.img } src={ img } alt={ imgAlt } />
    <div className={ css.content }>
        <h3 className={ css.title }>{ title }</h3>
        <ul className={ css.info }>
            <li className={ `${ css.dateBlock } ${ css.dateText }` }>{ date }</li>
            <li className={ `${ css.topicBlock } ${ css.topicText }`}>{ topic }</li>
        </ul>
        <p>{ text }</p>
    </div>
  </li>
  )
}

WorksItem.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
