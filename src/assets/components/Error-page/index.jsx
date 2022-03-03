import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

export class Error extends Component {

  componentDidMount() {
    const { titlePage } = this.props;
    document.title = 'John - ' + titlePage;
    window.scrollTo( 0, 0 );
  }

  render() {
    return(
      <div className={ css.container }>
          <h2 style={ { textAlign: 'center' } }>Error!</h2>
          <h3 style={ { textAlign: 'center' } }>Incorrect url address!</h3>
      </div>
    )
  }
}

Error.propTypes = {
  titlePage: PropTypes.string,
}

Error.defaultProps = {
  titlePage: 'Error',
}
