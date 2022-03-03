import React from 'react';
import css from './Card-info.module.scss';

export const CardInfo = () => (
  <div className={ css.content }>
    <h2 className={ css.title }>
      Hi, I am John,<br />Creative Technologist
    </h2>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint. Velit officia consequat duis enim velit mollit.
      Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
)