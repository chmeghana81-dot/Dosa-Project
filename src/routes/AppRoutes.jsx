import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';

import BookTable from '../pages/BookTable';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="book" element={<BookTable />} />
        <Route path="about" element={<div style={{padding: '150px 5%', minHeight: '100vh'}}><h1 className="text-display">ABOUT US</h1></div>} />
        <Route path="contact" element={<div style={{padding: '150px 5%', minHeight: '100vh'}}><h1 className="text-display">CONTACT</h1></div>} />
        <Route path="*" element={<div style={{padding: '100px 5%', minHeight: '100vh'}}><h1>404 Not Found</h1></div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
