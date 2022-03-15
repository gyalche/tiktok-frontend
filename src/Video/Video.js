import React from 'react';
import { useRef, useState } from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSideBar from '../VideoSideBar/VideoSideBar';
import './Video.css';
 function Video({url, channel, description, song,
likes, messages, share}) {
   const[playing, setPlaying]=useState(false);
   const videoRef= useRef(null);
   const handleVideoPress=()=>{
     // if video is playing stop it
      if(playing){
        videoRef.current.pause();
        setPlaying(false)
      }
     //else just play it
     else{
       videoRef.current.play();
       setPlaying(true)
     }
   }
  return (
    <div className='video'>
        <video 
        onClick={handleVideoPress}
        className='video_player'
        loop
        ref={videoRef}
        src={url}>
        </video>

        {/*video footer */}
        <VideoFooter
        channel={channel}
        description={description}
        song={song}
         />

        {/*videoSidebar */}
        <VideoSideBar
          likes={likes}
          messages={messages}
          share={share}
        />

    </div>
  )
}
export default Video;