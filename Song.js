/*import React, { useState, useRef } from 

function MusicPlayer({ tracks }) {
 const [trackIndex, setTrackIndex] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);
 const player = useRef(null);
 const [duration, setDuration] = useState(0);
 const [currentTime, setCurrentTime] = useState(0);

 const currentTrack = tracks[trackIndex];

 function updateTime(e) {
    setCurrentTime(e.target.currentTime);
 }

 function togglePlay() {
    if (isPlaying) {
      player.current.pause();
    } else {
      player.current.play();
    }
    setIsPlaying(!isPlaying);
 }

 function skip(e) {
    const trackCount = tracks.length;
    let newIndex = trackIndex;

    if (e.currentTarget.id === 'next') {
      newIndex = (trackIndex + 1) % trackCount;
    } else if (e.currentTarget.id === 'prev') {
      newIndex = (trackIndex - 1 + trackCount) % trackCount;
    }

    setTrackIndex(newIndex);
 }

 useState(() => {
    if (isPlaying) {
      player.current.play();
    } else {
      player.current.pause();
    }
 }, [isPlaying]);

 useState(() => {
    setDuration(player.current.duration);
 }, [currentTrack]);

 return (
    <div>
      <audio ref={player} src={currentTrack.src} onTimeUpdate={updateTime}>
        Your browser does not support the audio element.
      </audio>
      
      <div className="controls">
        <button id="prev" onClick={skip}>
          {'<<'}
        </button>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button id="next" onClick={skip}>
          {'>>'}
        </button>
      </div>
    </div>
 );
}

export default MusicPlayer;*/