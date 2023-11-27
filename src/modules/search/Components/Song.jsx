import { Button } from '@mui/material'
import React, { useState } from 'react'
import Appcss from '../../../App.css'
const Song = ({fn,song}) => {
  

  const showPlayer=()=>{
    fn(true,song);
  }

  return (
    <>
      <div className="container text-center card mt-2" >
      <div className="row mt-2 ">
    <div className="col-4 mt-2 " style={{alignItems:"center " , marginBottom:"10px"}}>
      <img src={song.artworkUrl100}/ >

    </div>
    <div className="col-4" style={{marginTop:"20px"}}>
    <span>Artist Name : {song.artistName}</span> 
    <p > Song : {song.trackName}</p>
    </div>
    <div className="col-4">
    <Button color="primary" className='mt-5'onClick={showPlayer} variant="outlined" >play</Button>
    </div>
  </div>
</div>

       
       
        

    </>
  )
}

export default Song