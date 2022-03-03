import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import { WorksList } from '@comp/Works-list';

export class Works extends Component {
  state = {
    worksNumber: 4,
    worksPage: true
  }
  
  componentDidMount() {
    const { titlePage } = this.props;
    document.title = 'John - ' + titlePage;
    window.scrollTo( 0, 0 );
  }
  
  render() {
    const { worksNumber } = this.state;
    return(
      <div className = { css.container }>
        <h2 className = { `${ css.title } ${ css.head }` }>Works</h2>
          <WorksList worksNumber = { worksNumber } worksPage />
      </div>
    )
  }
} 

Works.propTypes = {
  titlePage: PropTypes.string,
}

Works.defaultProps = {
  titlePage: 'Works',
}