import React from 'react';
import PropTypes from 'prop-types';

import { Message } from './Message';
import messageList from '@assets/docs/feed_post';

export const Feed = ( { messageNumber } ) => {
  const { messages } = messageList;
  const { from, to } = messageNumber;
  return(
    <ul>
      { messages
      .slice( from, to )
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
