import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/works' element={<Works/>}/>
                </Routes>
            </Router>
    </div>
  )
}

export default App
