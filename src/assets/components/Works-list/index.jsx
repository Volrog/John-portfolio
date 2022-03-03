import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import { WorksItem } from '@comp/Works-item';

import works from '@assets/docs/works_list';

export const WorksList = ( { worksNumber, worksPage } ) => {
  const { worksList } = works;
  return(
    <ul className={ worksPage ? '' : css.block }>
      { worksList.slice( 0, worksNumber ).map( ({ id, img, imgAlt, title, date, topic, text }) => 
        <WorksItem 
        key = { id }
        img = { img }
        imgAlt = { imgAlt }
        title = { title }
        date = { date }
        topic = { topic }
        text = { text }
        />
      )}
    </ul>
  );
}

WorksList.propTypes = {
  worksNumber: PropTypes.number.isRequired,
  worksPage: PropTypes.bool,
}

WorksList.defaultProps = {
  worksPage: false,
}