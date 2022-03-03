import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

export class Contact extends Component {
  
  componentDidMount() {
    const { titlePage } = this.props;
    document.title = 'John - ' + titlePage;
    window.scrollTo( 0, 0 );
  }
  
  render() {
    return(
      <section className={ css.section }>
        <div className={ css.container }>
          <h2 className={ `${ css.title } ${ css.head }` }>Contact</h2>
          <ul className={ css.content }>
            <li><a className={ css.link } href='mailto:#'>mail</a></li>
            <li><a className={ css.link } href='tel:#'>tel</a></li>
            <li><a className={ css.link } href='#'>GitHub</a></li>
          </ul>
        </div>
      </section>
    )
  }
} 

Contact.propTypes = {
  titlePage: PropTypes.string,
}

Contact.defaultProps = {
  titlePage: 'Contact',
}