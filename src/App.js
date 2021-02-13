import React, { Fragment } from 'react';
import './App.css';

const App = () => {

  const randomNumber = () => Math.floor(Math.random() * 15) + 5;

  const earClick = () => {
    let numberOfLines = randomNumber();
    fetch(`https://poetrydb.org/title,linecount/ear;${numberOfLines}/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message));
  };

  const eyeClick = async () => {
    let numberOfLines = randomNumber();
    fetch(`https://poetrydb.org/title,linecount/eye;${numberOfLines}/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message));
  };

  const noseClick = async () => {
    let numberOfLines = randomNumber();
    fetch(`https://poetrydb.org/title,linecount/nose;${numberOfLines}/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message));
  };
  
  const mouthClick = async () => {
    let numberOfLines = randomNumber();
    fetch(`https://poetrydb.org/title,linecount/mouth;${numberOfLines}/lines.json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message));
  };

  return (
    <Fragment>
        <div class="head">
          <div class="top-fur"></div>
          <div class="ears">
            <div class="ear-left" onClick={earClick}></div>
            <div class="ear-right" onClick={earClick}></div>
          </div>
          <div class="brows">
            <div class="brow"></div>
            <div class="brow"></div>
          </div>
          <div class="eyes">
            <div class="eye" onClick={eyeClick}></div>
            <div class="eye" onClick={eyeClick}></div>
          </div>
          <div class="snout"></div>
          <div class="nose" onClick={noseClick}></div>
          <div class="mouth" onClick={mouthClick}>
            <div class="teeth"></div>
            <div class="teeth"></div>
          </div>
          <div class="cheeks">
            <div class="cheek"></div>
            <div class="cheek"></div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
