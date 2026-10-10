import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import BookTable from '../pages/BookTable';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="book" element={<BookTable />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div style={{padding: '100px 5%', minHeight: '100vh'}}><h1>404 Not Found</h1></div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
