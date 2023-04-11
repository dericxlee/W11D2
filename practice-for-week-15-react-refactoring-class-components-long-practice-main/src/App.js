import React from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';
import {useState} from 'react'


// class App extends React.Component {
function App(){
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showClock: true
  //   };
  // }
  const [showClock, setShowClock] = useState(true)
  
  const toggleClock = function(){
    setShowClock((prev) => !prev);
  }

  const folders = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second folder here' },
    { title: 'three', content: 'Third folder here' }
  ];

  const names = [
    'Abba',
    'Barbara',
    'Barney',
    'Jeff',
    'Jenny',
    'Sally',
    'Sarah',
    'Xander'
  ];
  
  // render () {
  return (
    <div className="widgets">
      <Folder folders={folders} />
      <Weather />
      <ClockToggle toggleClock={toggleClock} />
      {showClock && <Clock />}
      <Autocomplete names={names} />
    </div>
  );
  // }
}

export default App;