import React from 'react';
import {useState, useEffect} from 'react'

export class ClockToggle extends React.Component {
  render () {
    return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={this.props.toggleClock}
      >
        Toggle Clock
      </button>
    )
  }
} 

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }
function Clock(){

  const [time, setTime] = useState(new Date())
  
  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000);
  // }
  
  // componentWillUnmount() {
  //   console.log("Clearing Clock interval!")
  //   clearInterval(this.interval);
  // }
  const tick = () => {
    setTime(new Date());
  }

  useEffect(()=>{
    const interval = setInterval(tick, 1000)
    return (() => {
      console.log('clearing interval')
      clearInterval(interval)
    })
  }, [])

  // useEffect(()=>{
  //   console.log('clearing interval')
  //   clearInterval(interval)
  // }, [])
  

  // render() {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  const timezone = time
    .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
    .replace(/[^A-Z]/g, "") // Strip out all but capitals
    .slice(3); // Eliminate initial GMT

  return (
    <section className="clock-section">
      <h1>Clock</h1>
      <div className='clock'>
        <p className="time">
          <span>
            Time:
          </span>
          <span>
            {`${hours}:${minutes}:${seconds} ${timezone}`}
          </span>
        </p>
        <p className="date">
          <span>
            Date: 
          </span>
          <span>
            {time.toDateString()}
          </span>
        </p>
      </div>
    </section>
  );
  // }
}

export default Clock;