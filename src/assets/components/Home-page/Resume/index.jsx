import React from 'react';
import css from './index.module.scss';

import { Button } from '@comp/Home-page/Button';
import { ResumeCard } from '@comp/Home-page/Resume-card';

export const Resume = () => (
  <section className={ css.section }>
    <div className={ css.container }>
      <ResumeCard />
      <Button />
    </div>
  </section>
)

