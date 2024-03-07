import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';

function Index() {
  return ( 
<Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='home' element={<App />} />
        </Routes>
      </Router>
  )
}

export default Index