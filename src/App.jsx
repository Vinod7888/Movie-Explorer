import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import Movies from './pages/movies'
import About from './pages/About'

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    });
  }, []);

  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
