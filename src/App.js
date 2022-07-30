import logo from './logo.svg';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
import Home from './Home'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import AboutMe from './Components/AboutMe'

import './App.css';

// npm i react-animated-text 
// tree----

function App() {
  return (<BrowserRouter>
    {/* <Navigation /> */}
    {/* <Header /> */}
    <Routes>
      <Route path="/My-Portfolio" element={<Home />} />
      {/* <Route path="/register" element={< Header />} /> */}
      {/* <Route path="/" caseSensitive={false} element={<Home />} /> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  )

}

export default App;