
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Video from './Video/Video';
// import VideoFooter from './VideoFooter/VideoFooter';
// import VideoSideBar from './VideoSideBar/VideoSideBar';
import { useEffect, useState } from 'react';
import axios from './axios.js';
function App() {
  const [video, setVideo]=useState([]);
  useEffect(() => {
    return () => {
      async function fetchPost(){
        const response=await axios.get('/v2/posts');
        setVideo(response.data);
        
        return response;
      }
      fetchPost();
    };
  }, [])
  console.log(video);

  return (
    <div className="App">
      
        {/* app container */} 
        
        <BrowserRouter>
        
        <div className='app_videos'>
            {video.map(({url, channel,description, song, likes, messages, share})=>(
              <Video
                  url={url}
                  channel={channel}
                  song={song}
                  likes={likes}
                  messages={messages}
                  description={description}
                  share={share}
              />
            ))}
                  
          </div>
          

        </BrowserRouter>
          
        

    </div>
  );
}

export default App;
