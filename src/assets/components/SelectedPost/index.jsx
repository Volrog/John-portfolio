import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import { Message } from '@comp/Blog-page/Message';
import messageList from '@assets/docs/feed_post';

export const SelectedPost = ({ titlePage }) => {
  const [ id ] = useState( useParams().id );

  useEffect( () => document.title = 'John - ' + titlePage )
  const isSinglePost = true;

  const { messages } = messageList;
  const selectedMessage = messages.find( item => item.id === id );
  const { title, date, keywords, text } = selectedMessage;
  return(
    <div className={ css.container }>
      <ul>
        <Message 
          key = { id }
          id = { id }
          title = { title }
          date = { date }
          keywords = { keywords }
          text = { text }
          isSinglePost = { isSinglePost }
        />
      </ul>
    </div>
  )
}

SelectedPost.propTypes = {
  titlePage: PropTypes.string,
}

SelectedPost.defaultProps = {
  titlePage: 'Post',
}