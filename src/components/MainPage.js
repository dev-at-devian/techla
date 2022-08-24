import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function MainPage() {
    return (
        <>
            <div className='mainPage'>
                <div style={{position: "relative", width:"100%", height: 0, paddingTop: "56.25%", paddingBottom: 48, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden", borderRadius: 8, willChange: "transform"}}>
                  <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0}}
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFKPi95CCE&#x2F;view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
                  </iframe>
                </div>
            </div>
        </>
    );
}

export default MainPage;
