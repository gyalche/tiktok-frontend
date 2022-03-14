
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Video from './Video/Video';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSideBar from './VideoSideBar/VideoSideBar';
function App() {
  return (
    <div className="App">
      
        {/* app container */} 
        
        <BrowserRouter>
        
        <div className='app_videos'>
            <Video></Video>
            <Video></Video>
            <VideoFooter />
            <VideoSideBar />
        </div>
          

        </BrowserRouter>
          
        

    </div>
  );
}

export default App;
