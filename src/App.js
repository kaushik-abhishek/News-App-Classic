//import { render } from '@testing-library/react'
import React from 'react'
import Navbar from './component/Navbar'
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './component/Login';

function App(){
  return <div>
  <Router>
  <Navbar />
  <Routes>
      <Route exact path="/" element={<News key="general" pageSize={9} country="in" category='general' />} />
      <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category='business' />} />
      <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category='entertainment' />} />
      <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category='health' />} />
      <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category='science' />} />
      <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category='sports' />} />
      <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category='technology' />} />
      <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category='general' />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<signUp />} />
      
    </Routes>
 
  </Router>
  </div>
}


export default App;
