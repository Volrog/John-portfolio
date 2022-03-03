import React, { Fragment } from 'react';

import { Header } from '@comp/Header';
import { Footer } from '@comp/Footer';

export const App = ( { children } ) => (
  <Fragment>
    <Header />
    { children }
    <Footer />
  </Fragment>
)

