import React, { Fragment } from 'react';
import './App.css';

const App = () => {

  const earClick = () => {
    // 17 - 22 are 14 lines long <3
    let n = Math.floor(Math.random() * (22 - 17 + 1)) + 17;
    fetch(`https://poetrydb.org/title/hear/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = data[n].lines.toString().replace(/[^\w.']+/g, " ");
        window.speechSynthesis.speak(msg);
      })
      .catch((err) => console.error(err.message));
  };

  const eyeClick = async () => {
    // 10 - 15 are 14 lines long <3
    let n = Math.floor(Math.random() * (15 - 10 + 1) + 10)
    fetch(`https://poetrydb.org/title/see/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = data[n].lines.toString().replace(/[^\w.']+/g, " ");
        window.speechSynthesis.speak(msg);
      })
      .catch((err) => console.error(err.message));
  };
  
  const mouthClick = async () => {
    // only 0 is 14 lines long :( </3
    fetch(`https://poetrydb.org/title/speak/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = data[0].lines.toString().replace(/[^\w.']+/g, " ");
        window.speechSynthesis.speak(msg);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <Fragment>
        <div className="head">
          <div className="top-fur"></div>
          <div className="ears">
            <div className="ear-left" onClick={earClick}></div>
            <div className="ear-right" onClick={earClick}></div>
          </div>
          <div className="brows">
            <div className="brow"></div>
            <div className="brow"></div>
          </div>
          <div className="eyes">
            <div className="eye" onClick={eyeClick}></div>
            <div className="eye" onClick={eyeClick}></div>
          </div>
          <div className="snout"></div>
          <div className="nose"></div>
          <div className="mouth" onClick={mouthClick}>
            <div className="teeth"></div>
            <div className="teeth"></div>
          </div>
          <div className="cheeks">
            <div className="cheek"></div>
            <div className="cheek"></div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
