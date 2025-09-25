import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // ✨ Import from style folder
// import SearchBar from '../components/SearchBar';
// import BookCard from '../components/BookCard';
// import { getFeaturedBooks, getCategories } from '../data/booksData';

const HomePage = () => {

  return (
    <div className="home-page">
      {/* Hero Section */}
      <h1>Hello Labboy.</h1>
      <p>My name is Pongrapee Suebyart 660710724</p>
    </div>
  );
};

export default HomePage;