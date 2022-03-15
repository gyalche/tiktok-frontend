import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
 function VideoFooter({channel, description, song}) {
  return (
    <div className='VideoFooter'>
        <div className='VideoFooter_text'>
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter_ticker'>
          <MusicNoteIcon className='videoFooter_icon' />
          <Ticker mode='smooth'>
              {({index})=>(
                <>
                <p>{song}</p>
                </>
              )}
          </Ticker>
        </div>
        </div>
        <img className='videoFooter_record'
        src='https://www.flaticon.com/premium-icon/tik-tok_4138198'
        alt=''>

        </img>

    </div>
  )
}
export default VideoFooter;