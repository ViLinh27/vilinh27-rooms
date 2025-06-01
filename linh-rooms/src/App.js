import React from 'react';
import Navbar from './components/homepage/Navbar';
import {Routes, Route} from 'react-router-dom';
import './App.css';

// Components
import Homepage from './pages/Homepage';
import About from './pages/About';
import MyLinks from './pages/MyLinks';
import MyCV from './pages/MyCV';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/*to render navbar on all pages */}
      <Navbar />

      {/*The Routes */}
      <Routes>
        {/*
            element is for what component to render
            path is for the url path of said component
         */}
         <Route path="/pages/Homepage" element={<Homepage />}/>
         <Route path="/pages/About" element={<About/>}/>
         <Route path="/pages/MyLinks" element={<MyLinks />}/>
         <Route path="/pages/CV" element={<MyCV/>}/>
         <Route path="/pages/Contact" element={<Contact/>}/>
         
        {/* default route */}
        <Route path="/" element={<Homepage/>}/>
        {/* <Route path="*" element={<NotFoundPage />} />  Optional: for 404 pages */}
      </Routes>
    </div>
  );
}

export default App;
