import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import { Feed } from './Feed';

export class Blog extends Component {
  state = {
    messageNumber: {
      from: 0,
      to: 3
    }
  }

  componentDidMount() {
    const { titlePage } = this.props;
    document.title = 'John - ' + titlePage;
    window.scrollTo( 0, 0 );
  }

  render() {
    const { messageNumber } = this.state;
    return(
      <div className={ css.container }>
        <h2 className={ `${ css.title } ${ css.head }` }>Blog</h2>
        <Feed messageNumber={ messageNumber } />
      </div>
    )
  }
}

Blog.propTypes = {
  titlePage: PropTypes.string,
}

Blog.defaultProps = {
  titlePage: 'Blog',
}
