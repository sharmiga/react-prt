import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home.js";
import Playlist from "./components/Playlist.js";
import Artist from "./components/Artist.js"; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './login.js';
import Signup from './components/Signup.js'; 
import Gv from './components/Gv';
import Spb from './components/Spb';
import Anirudh from './components/Anirudh';
import Ar from './components/Ar';
import Yuvan from './components/Yuvan.js';
import Shreya from './components/Shreya.js';
import Sid from './components/Sid.js';
import Anu from './components/Anu.js';
import Jay from './components/Jay.js';
import Harris from './components/Harris.js';
import Kar from './components/Kar.js';
import Hop from './components/Hop.js';
import Dsp from './components/Dsp.js';
import Arj from './components/Arj.js';
import Swe from './components/Swe.js';
import Anto from './components/Anto.js';
//import MusicPlayer from './Song.js';
import MusicPlaye from './Musicplaye.js';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Playlist" element={<Playlist/>}/>
        <Route path="/Artist" element={<Artist/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Gv" element={<Gv/>}/>
        <Route path="/Spb" element={<Spb/>}/>
        <Route path="/Anirudh" element={<Anirudh/>}/>
        <Route path="/Ar" element={<Ar/>}/>
        <Route path="/yuvan" element={<Yuvan/>}/>
        <Route path="/Shreya" element={<Shreya/>}/>
        <Route path="/Sid" element={<Sid/>}/>
        <Route path="/Anu" element={<Anu/>}/>
        <Route path="/Jay" element={<Jay/>}/>
        <Route path="/Harris" element={<Harris/>}/>
        <Route path="/Kar" element={<Kar/>}/>
        <Route path="/Hop" element={<Hop/>}/>
        <Route path="/Dsp" element={<Dsp/>}/>
        <Route path="/Arj" element={<Arj/>}/>
        <Route path="/Swe" element={<Swe/>}/>
        <Route path="/Anto" element={<Anto/>}/>
        <Route path="/Song" element={<MusicPlaye/>}/>
        
      </Routes>
      </BrowserRouter>
      < MusicPlaye/>
    </div>
    
  );
}

export default App;
