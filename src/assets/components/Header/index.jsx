import React, { Component } from 'react';
import css from './index.module.scss';

import { Menu } from './Menu';
import { MenuBurger } from './MenuBurger';

export class Header extends Component {
  state = {
    menuIsOpen: false,
  }

  handleClick = () => {
    if( document.documentElement.clientWidth < 470 ) {
      this.setState( ({ menuIsOpen }) => ({ 
        menuIsOpen: !menuIsOpen,
      }) )
    }
  }

  componentDidUpdate() {
    const { menuIsOpen } = this.state;
    const bodyStyle = document.body.style; 
    if( menuIsOpen ) {
      return bodyStyle.overflow = 'hidden';
    }
    else {
      return bodyStyle.overflow = 'auto';
    }
  }

  render() {
    const { menuIsOpen } = this.state;
    return(
      <header className = { css.section }>
        <div className = { css.container }>
          <div className = { css.block }>
            <MenuBurger 
              menuIsOpen = { menuIsOpen }
              handleClick = { this.handleClick }
            />
            </div>
            <Menu menuIsOpen = { menuIsOpen } handleClick = { this.handleClick } />  
        </div>
      </header>
    )
  }
}

