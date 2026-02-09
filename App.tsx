
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AdminProvider } from './context/AdminContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecommendationPage from './pages/RecommendationPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recommendations" element={<RecommendationPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/about" element={<PlaceholderPage title="About Us" />} />
                <Route path="/blog" element={<PlaceholderPage title="Our Blog" />} />
                <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
                <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
                <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
