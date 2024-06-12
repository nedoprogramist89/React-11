import React from 'react';
import '../styles/Main.css';
import mainImage from '../Images/Main1.png';
import logo1Image from '../Images/logo.png';

const Main = () => {
  return (
    <div id="main">
      <div id="image1">
        <img src={mainImage} style={{ height: '100%', width: '100%', borderRadius: '29px' }} alt="Main" />
      </div>
      <div id="ikon">
        <img src={logo1Image} alt="Icon" />
      </div>
      <h2 id="text1">Анимированные арты по манге "One Piece"</h2>
      <h1 id="text2">
        На базе AI
        <div id="knopka">
          <div id="krug">
            <div id="textknopka"><a href="qweqwe.html">Попробывать</a></div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Main;
