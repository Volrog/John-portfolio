import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from '@assets/components/App';
import '@assets/scss/main.scss';

import { Home } from '@comp/Home-page';
import { Works } from '@comp/Works-page';
// import { Work } from '@comp/Work-page';
import { Blog } from '@comp/Blog-page';
import { SelectedPost } from '@comp/SelectedPost';
import { Contact } from '@comp/Contact-page';
import { Error } from '@comp/Error-page';

ReactDOM.render( (
  <BrowserRouter>
    <App>
      <Routes>
        <Route exact path='/' element={ <Home titlePage='Home' /> } />
        <Route exact path='/works' element={ <Works titlePage='Works' /> } />
        {/* <Route path='/works/:id' element={ <Work titlePage='Work' /> } /> */}
        <Route exact path='/blog' element={ <Blog titlePage='Blog' /> } />
        <Route path='/blog/:id' element={ <SelectedPost titlePage='Post' /> } />
        <Route path='/contact' element={ <Contact titlePage="Contact"/> } />
        <Route path='*' element={ <Error titlePage='Error' /> } />
      </Routes>
    </App>
  </BrowserRouter>
), document.getElementById( 'root' ) );