import React from 'react';
import css from './index.module.scss';

import { CardInfo } from './Card-info';
import avatar from '@assets/img/avatar.png';

export const ResumeCard = () => (
  <div className={ css.block }>
    <CardInfo />
    <img className={ css.avatar } src={ avatar } alt="User's avatar" />
  </div>
)