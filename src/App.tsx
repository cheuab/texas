import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BoardMembersPage from './pages/BoardMembersPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import PracticeProblemsPage from './resources/studymaterials/problems/Questions';
import Units from './resources/studymaterials/Units';
import EventsPage from './pages/Events';
import StudyHome from './resources/studymaterials/StudyHome';
import Registration from './resources/registration';
import Textbooks from './resources/Textbooks';


// This is your app file that sets up the main structure of your application
// It includes all the different pages and components that make up your app
// The BrowserRouter component contains the entire application to enable routing
// The Routes component defines the different routes in your application
// Each Route component specifies a path for the code to follow when that path is accessed
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#FFF8F0]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/board-members" element={<BoardMembersPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources/studyhome" element={<StudyHome />} />
            <Route path="/resources/study-materials" element={<PracticeProblemsPage />} />
            <Route path="/resources/study-materials/units" element={<Units />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/resources/registration" element={<Registration />} />
            <Route path="/resources/textbooks" element={<Textbooks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}