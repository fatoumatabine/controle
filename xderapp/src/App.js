import React from 'react';

import { Footer, Blog, Possibility, Features, DjiguenDev, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './style.css'

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <DjiguenDev />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;