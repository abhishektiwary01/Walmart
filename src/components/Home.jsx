import React from 'react';
import '../styles/Home.css';
import { Header } from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import Body from './Body';
const Home = () => {
  return (
    <div className='main-container'>
     <Header></Header>
     <Navbar></Navbar>
     <HeroBanner></HeroBanner>
     <Body></Body>
     <Footer></Footer>

      
    
    </div>
  );
};

export default Home;
