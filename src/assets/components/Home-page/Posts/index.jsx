import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './index.module.scss';

import { Feed } from '@comp/Home-page/Feed';

export class Posts extends Component {
  state = {
    messageNumber: {
      from: 0,
      to: 2
    }
  }

  render() {
    const { messageNumber } = this.state;
    return(
      <section className={ css.section }>
        <div className={ css.container }>
          <div className={ css.head }>
            <h3 className={ css.title }>Recent posts</h3>
            <Link to='/Blog' className={ css.link }>View all</Link>
          </div>
          <Feed messageNumber={ messageNumber } />
        </div>
      </section>
    );
  }
}