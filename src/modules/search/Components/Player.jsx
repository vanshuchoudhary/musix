import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(220, 208, 214) 0%, rgb(228, 214, 211) 100%)',
  // background: linear-gradient(rgb(241, 223, 231) 0%, rgb(245, 227, 224) 100%),
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 20,
  borderRadius: 16,
  width: 650,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 120,
  height: 120,
  objectFit: 'cover',
  padding:10,
  marginRight:50,
  marginBottom:35,
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function Player({fn,song}) {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  return (
   <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Box sx={{ width: '100%', overflow: 'hidden'}}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
          <img src={song.artworkUrl100}/>
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={900} fontSize={25}>
             {song.artistName}
             <br />
            </Typography>
            <Typography variant="caption" color="text.secondary" fontWeight={700} fontSize={15}>
             {song.trackName}
            </Typography>
            
            
          </Box>
        </Box>
       
        <Box
          
        >
          
        </Box>
        <Box
          
        >
          
          
        </Box>
        <div alignItems='center' className='mt-2' >
            <audio controls style={{width:'600px', marginBottom:'20px'}}>
                <source src={song?.previewUrl} type="audio/mp4"/>
                Your browser does not support the audio element
            </audio>
            </div>
            <Button onClick={()=>{
                fn(false,null)
            }} className="btn btn-outline-primary">Back</Button>
    
        
      </Widget>
      <WallPaper />
    </Box>
  
  </>
  )}




// import { Button } from '@mui/material'
// import React from 'react'


// const Player = ({fn,song}) => {
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <a className="navbar-brand" href="#">SPOTIFY</a>

//           <Button onClick={()=>{
//         fn(false,null)
//     }}variant="contained">BACK</Button>
//     {/* {song.artistName} */}
        
//       </nav>      
    
//     <audio controls>
//         <source src={song?.previewUrl} type="audio/mp4"/>
//         Your browser does not support the audio element
//     </audio>
//     </>
//   )
// }

// export default Player