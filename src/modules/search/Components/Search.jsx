import React from 'react'
import Button from '@mui/material/Button';
import { useRef } from 'react';
import Appcss from '../../../App.css'

const Search = ({fn}) => {

  const artist=useRef();  //just like pointer . stores the reference . it is a hook (use)

  const clicked=()=>{
    fn(artist.current.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand rounded m-2 p-3 " >
          <h1 className='m-2 ' style={{color:'grey'}}>Musix</h1>
          

              <input ref={artist} className="form-control me-2" type="search" placeholder="search here" aria-label="Search"/>
              <button onClick={clicked} className="btn btn-outline-success" type="submit">Search</button>
        
      </nav>      
      
      {/* <input ref={artist} type='text' placeholder='Type to Search Here'/>

      <Button onClick={clicked} variant="contained">Search</Button> */}
      
      </>
  )
}

export default Search