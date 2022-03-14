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
        src='https://v16-webapp.tiktok.com/e73225cf437a0f05e3d712ea7e6d0213/622fc803/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/3b6b7157f94f4eebb99e8a2a1e072a5e/?a=1988&br=2894&bt=1447&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tpnz7Th56svDXq&l=2022031416554901024524804726479E30&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzlyOjs6Zng5OzMzZjczM0ApNzUzPDg4Njw8NzM1Z2ZpNmczLm9ucjRncmpgLS1kMWNzc2JeXjZjYWFiNTYxLWBiMjI6Yw%3D%3D&vl=&vr='>
        </video>

        {/*video footer */}
        

        {/*videoSidebar */}

    </div>
  )
}
export default Video;