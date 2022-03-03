import React from 'react';
import css from './index.module.scss';

export const Button = () => (
  <a href='./resume.txt' download='John-resume.txt' className={ `${css.block} ${css.text}` }>Download Resume</a>
)
