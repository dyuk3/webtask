import React from 'react';
import Header from '../components/Header';
import PrimarySection from '../components/PrimarySection';
import Explore1 from '../components/Explore1';
import Destinations from '../components/Destinations';
import Explore2 from '../components/Explore2';
import BookNow from '../components/BookNow';
import Testimonials from '../components/Testimonials';
import Discount from '../components/Discount';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Header />
      <PrimarySection />
      <Explore1 />
      <Destinations />
      <Explore2 />
      <BookNow />
      <Testimonials />
      <Discount />
      <Footer />
    </div>
  );
};

export default Homepage;
