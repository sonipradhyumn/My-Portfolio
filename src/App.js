import logo from './logo.svg';
// import { Switch } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
// import Homepage from './Components/home'
// import Upload from './Components/upload'
// import NewLabel from './Components/addNewLabel'
// import Labeling from './Components/labeling'
// import Navigation from './Components/navigation'
// import Footer from './Components/footer'
import Home from './Home'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import AboutMe from './Components/AboutMe'

import './App.css';



// npm i react-animated-text 
// tree----

function App() {
  return (<div>

    <BrowserRouter>
      {/* <Navigation /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/My-Portfolio" element={<Home />} />
        {/* <Route path="/register" element={< Header />} /> */}
        {/* <Route path="/" caseSensitive={false} element={<Home />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>


  </div>
  )

}

export default App;