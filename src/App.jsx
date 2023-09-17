import React from 'react';
import { Hero, Navbar,Companies, Courses, Achievement, Categories, Feedback, CTA, Footer } from './components';
import './App.css'
import Join from './components/Join';
import Payment from './components/Payment';
 

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies/>
      <Courses />
      <Achievement />
      <Categories />
      <Join />
      <CTA />
      <Payment />
      <Footer />
    </div>
  )
}

export default App