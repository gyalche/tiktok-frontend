import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
 function VideoFooter() {
  return (
    <div className='VideoFooter'>
        <div className='VideoFooter_text'>
        <h3>@dawadon</h3>
        <p>This is some description</p>
        <div className='videoFooter_ticker'>
          <MusicNoteIcon className='videoFooter_icon' />
          <Ticker mode='smooth'>
              {({index})=>(
                <>
                <p>dawa is a don </p>
                </>
              )}
          </Ticker>
        </div>
        </div>
    </div>
  )
}
export default VideoFooter;