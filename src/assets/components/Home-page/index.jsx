import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Resume } from './Resume';
import { Posts } from './Posts';
import { Works } from './Works';

export class Home extends Component {

  componentDidMount() {
    const { titlePage } = this.props;
    document.title = 'John - ' + titlePage;
    window.scrollTo( 0, 0 );
  }

  render() {
    return(
      <Fragment>
        <Resume />
        <Posts />
        <Works />
      </Fragment>
    )
  }
}

Home.propTypes = {
  titlePage: PropTypes.string,
}

Home.defaultProps = {
  titlePage: 'Home',
}