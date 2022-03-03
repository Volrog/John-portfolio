import React, { Component } from 'react';
import css from './index.module.scss';

import { WorksList } from '@comp/Works-list';

export class Works extends Component {
  state = {
    worksNumber: 3,
  }
  
  render() {
    const { worksNumber } = this.state;
    return(
      <section className={ css.section }>
        <div className={ css.container }>
          <h3 className={ css.title }>Featured works</h3>
          <WorksList worksNumber={ worksNumber } />
        </div>
      </section>
    );
  }
}