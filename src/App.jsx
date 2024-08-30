
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Landingpage from './pages/Landingpage'
import WatchHistory from './pages/WatchHistory'

function App() {

  return (
    <>
  <Header/>
    
    <div className="container-fluid" style={{ background:'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)),url(https://mrwallpaper.com/images/hd/beautiful-dark-outer-space-and-planet-hjd2ezzinznjbl40.jpg)', backgroundRepeat:'no-repeat', marginTop:'-100px'}}>
    <div className="container-fluid" style={{background:"linear-gradient(to bottom,rgb(0, 0, 0,0),rgb(0, 0, 0,1))"}}>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<WatchHistory/>}/>
    </Routes>
    </div>

    </div>
  <Footer/>
    </>
  )
}

export default App
