import React, { Component, Fragment } from 'react';
import css from './index.module.scss';

import fbIcon from '@assets/img/icons/fb.svg';
import instaIcon from '@assets/img/icons/insta.svg';
import twIcon from '@assets/img/icons/tw.svg';
import inIcon from '@assets/img/icons/in.svg';

export const Footer = () => (
  <footer className={ css.section }>
    <div className={ css.container }>
        <div className={ css.icons }>
          <a href='https://www.facebook.com/' target='_blank' className={ css.iconsItem }>
            <img src={ fbIcon } alt='fb' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' className={ css.iconsItem }>
            <img src={ instaIcon } alt='insta' />
          </a>
          <a href='https://twitter.com/' target='_blank' className={ css.iconsItem }>
            <img src={ twIcon } alt='tw' />
          </a>
          <a href='http://www.linkedin.com/' target='_blank' className={ css.iconsItem }>
            <img src={ inIcon } alt='in' />
          </a>
        </div>
        <h4 className={ css.copyright }>Copyright ©2020 All rights reserved</h4>
    </div>
  </footer>
)