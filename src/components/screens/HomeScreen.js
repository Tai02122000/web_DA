import React from 'react';
import Header from '../Header';
import ShopSection from '../homeComponents/ShopSection.js';
import Footer from "../Footer"
import CalltoActionSection from "../homeComponents/CalltoActionSection"

const HomeScreen = () => {
    window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <ShopSection />
      <CalltoActionSection / >
      <Footer />
    </>
  )
}

export default HomeScreen
