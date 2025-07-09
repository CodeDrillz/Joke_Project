import React from 'react';
import { useState } from 'react'
import { JokeDatas } from './Jokedatas';

export const JokeCentral = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <LandingPage
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <JokeDatas darkMode={darkMode} inputValue={inputValue} />
    </>
  );
};

//********HEADER SECTION********//
// '☀️ Light' //

const LandingPage = ({ darkMode, setDarkMode, inputValue, setInputValue }) => {
  const [activeButton, setActiveButton] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div id="body-container" className={`${darkMode ? 'dark-theme' : ''}`}>
        <div className="navbar">
          <div className="nav-menu">
            <h3 className="nav-logo">🎭 Joke App</h3>
            <button
              onClick={() => setActiveButton('home')}
              className={`homebtn ${
                activeButton === 'home' ? 'button-active' : 'button-inactive'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveButton('jokes')}
              className={`${
                activeButton === 'jokes' ? 'button-active' : 'button-inactive'
              }`}
            >
              Jokes
            </button>
            <button
              onClick={toggleDarkMode}
              className={`theme-toggle-button ${
                darkMode ? 'btn-light-mode' : 'btn-dark-mode'
              }`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>

        <div id="Hero" className={'hero-body'}>
          <h1>🎭 Welcome to Joke Central</h1>
          <p className="body-text">
            Your favorite collection of programming and tech jokes!
          </p>
          <h5>Enter your name to get started:</h5>
          <input
            type="text"
            placeholder="Your name here..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          {inputValue.trim() && (
            <span className="input-value">Hello, {inputValue} 👋</span>
          )}
          {/* {inputValue ? (
            <span className="input-value">Hello, {inputValue} 👋</span>
          ) : (
            ''
          )} */}
          <div className="hero-box-items">
            <div>
              <span>😂</span>
              <h3>Funny Jokes</h3>
              <p>Discover hilarious programming and tech jokes</p>
            </div>

            <div>
              <span>💻</span>
              <h3>Tech Humor</h3>
              <p>Perfect for developers and tech enthusiasts</p>
            </div>

            <div>
              <span>🎉</span>
              <h3>Daily Laughs</h3>
              <p>Get your daily dose of coding humor</p>
            </div>
          </div>
          <h3 className="body-text2">
            {inputValue.trim()
              ? `Ready for some laughs, ${inputValue}?`
              : 'Ready to laugh?'}
          </h3>
          <button>View All Jokes →</button>
        </div>
      </div>
    </>
  );
};
