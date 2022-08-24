import logo from './logo.svg';
import './App.css';
import beep from './beep.wav';
import Piano from './Piano';
import SVGMusicNotation from 'svg-music-notation';
import MIDISounds from 'midi-sounds-react';
import {useState, useRef} from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

import QuizCard from './components/QuizCard';
import QuizList from './components/QuizList';
import Prototype from './components/Prototype'
import SecondPrototype from './components/SecondPrototype';
import MainPage from './components/MainPage';
import Notas from './components/Notas';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';




function App() {

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="App">
        <AppBar className='AppBar' position="static">
            <Toolbar>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  
                  <Menu
                    style={{color:"rgba(0,0,0,0.2)"}}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left', }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}>

                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/");
                      }
                     }>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/fundamentals");
                      }
                     }>
                      1 - Fundamentals
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      2 - Notes
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      3 - Notes
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      4 - Chords
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      5 - Songs
                    </MenuItem>
                    <div>---------------</div>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      Free Play!
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      Forum
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      Support
                    </MenuItem>

                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      Settings
                    </MenuItem>

                    <MenuItem onClick={() => {
                        setAnchorEl(null);
                        navigate("/freeplay");
                      }
                     }>
                      About Us
                    </MenuItem>


                  </Menu>



                </div>
                <h1 style={{color:"rgba(0,0,0,0.4)"}}>Tech_la</h1>
            </Toolbar>
        </AppBar>

        <div style={{ margin: 40 }}>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/freeplay" element={<Notas />} />
              <Route path="/prototype" element={<Prototype />} />
              <Route path="/prototype2" element={<SecondPrototype />} />
              <Route path="/fundamentals" element={<QuizList />} />
              <Route path="*" element={<div>lol</div>} />
          </Routes>
        </div>

    </div>
  );
};

export default App;
