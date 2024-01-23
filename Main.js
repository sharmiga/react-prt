import React, { useContext, useState } from 'react';

const SongContext = React.createContext();

const SongProvider = ({ children }) => {
 const [songs, setSongs] = useState([]);

 const addSong = (song) => {
    setSongs([...songs, song]);
 };

 const removeSong = (songTitle) => {
    setSongs(songs.filter((song) => song.title !== songTitle));
 };

 return (
    <SongContext.Provider value={{ songs, addSong, removeSong }}>
      {children}
    </SongContext.Provider>
 );
};

const useSongs = () => {
 const context = useContext(SongContext);
 if (!context) {
    throw new Error('useSongs must be used within a SongProvider');
 }
 return context;
};

export { SongProvider, useSongs };