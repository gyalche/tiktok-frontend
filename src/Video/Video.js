import React from 'react';
import { useRef, useState } from 'react';
import './Video.css';
 function Video() {
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
        src='https://v16-webapp.tiktok.com/795c6a7734572f04c41a8ab3f9a34dd3/6230a3be/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/243ba03e9ead41c9817f92460fdb08ba/?a=1988&br=3142&bt=1571&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tpnz7Th~aQiDXq&l=2022031508332101024500206906213B71&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2g0azM6Zjo1OzMzZjczM0ApNWg1NTgzaWU6Nzw6ZGU2N2dlLmBwcjRnMl5gLS1kMWNzc2FgYi81MGMzMjExM14wYi06Yw%3D%3D&vl=&vr='>
        </video>

        {/*video footer */}
        

        {/*videoSidebar */}

    </div>
  )
}
export default Video;