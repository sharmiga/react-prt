import React, { useState, useRef, useEffect } from 'react';
import s1 from './Badass--From-Leo--Anirudh-Ravichander.mp3'

import './App.css'
import { Row,Col,Container,Card,CardBody,CardImg } from 'react-bootstrap';
const MusicPlaye= () => {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songs, setSongs] = useState([
    {
      title: 'Song 1',
      file: s1,
      img:'https://cdn.jattpendu.com/thumbmed/48600780.jpg'
    },
    {
      title: 'Song 2',
      file: s1,
      img:'https://cdn.jattpendu.com/thumbmed/48672404.jpg',
    },
    // Add more songs as needed
  ]);

  const playSong = () => {
    audioRef.current.src = songs[currentSongIndex].file;

  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  useEffect(() => {
    playSong();
  }, [currentSongIndex]);

  return (
    <div style={{
      marginTop:'100px'
    }}>
      <Card >
        <CardImg src={songs[currentSongIndex].img} alt='img'/>
        
        <CardBody>
          <h2>{songs[currentSongIndex].title}</h2>
      <audio ref={audioRef} controls autoPlay />
           
        </CardBody>
        <button onClick={playPreviousSong}>Previous</button>
        <button onClick={playNextSong}>Next</button>
      </Card>
      
     
    </div>
  );
};

export default MusicPlaye;