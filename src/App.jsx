import React from 'react'
import Home from "./components/Home";
import NavBar from './components/NavBar';
import Page2 from './components/Page2';

const App = () => {
  return (
    <>
    <div className="w-full min-h-screen">
      {/* ✅ Global Navbar */}
      <NavBar />

      {/* ✅ Your Main Page */}
      <Home />
      <Page2 />
    </div>
    </>
    
  )
}

export default App