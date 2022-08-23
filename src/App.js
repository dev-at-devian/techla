import logo from './logo.svg';
import './App.css';
import beep from './beep.wav';
import Piano from './Piano';
function App() {
  const alarm = new Audio(beep);
  return (
    <div className="App">
      <button onClick={ () => alarm.play() }>Playoyoyyo</button>
      <Piano whiteKeysColor="#000000" blackKeysColor="#ff0" stroke="#ff0"/>
    </div>
  );
};

export default App;
