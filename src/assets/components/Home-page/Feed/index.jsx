import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import { Message } from '@comp/Home-page/Message';
import messageList from '@assets/docs/feed_post';

export const Feed = ( { messageNumber } ) => {
  const { messages } = messageList;
  const { from, to } = messageNumber;
  return(
    <ul className={ css.block }>
      { messages
      .slice( from, to)
      .map( ({ id, title, date, keywords, text }) => 
        <Message 
          key = { id }
          id = { id }
          title = { title }
          date = { date }
          keywords = { keywords }
          text = { text }
        />
      )}
    </ul>
  );
}

Feed.propTypes = {
  messageNumber: PropTypes.object.isRequired,
}