import React, { useState } from 'react';

// const [chgColor, setchgColor] = useState(false);

export const JokeDatas = ({ darkMode, inputValue }) => {
  return (
    <>
      <div className={`${darkMode ? 'dark-theme' : ''}`}>
        <Data_Punchline inputValue={inputValue} />
      </div>
    </>
  );
};

// Jokes Data With Setup/Punchline Structure

const Data_Punchline = ({ inputValue }) => {
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: 'Because they make up everything!',
    },
    {
      setup: 'Why did the student eat his homework?',
      punchline: 'Because his teacher told him it was a piece of cake!',
    },
    {
      setup: 'Why do programmers prefer dark mode?',
      punchline: 'Because light attracts bugs!',
    },
    {
      setup: 'Why did the computer get cold?',
      punchline: 'Because it forgot to close Windows.',
    },
    {
      setup: 'Why was the math book sad?',
      punchline: 'Because it had too many problems.',
    },
    {
      setup: 'Why did the developer go broke?',
      punchline: 'Because he used up all his cache.',
    },
    {
      setup: 'Why do Java developers wear glasses?',
      punchline: "Because they don't see sharp.",
    },
    {
      setup: 'Why was the cell phone wearing glasses?',
      punchline: 'Because it lost its contacts.',
    },
    {
      setup: 'Why did the function stop calling?',
      punchline: 'Because it had too many arguments.',
    },
    {
      setup: "What's a programmer's favorite hangout place?",
      punchline: 'The Foo Bar.',
    },
  ];

  return (
    <>
      <div id="Main" className={'main-body'}>
        <p className="main-body-text">Total Jokes Available: 10</p>
        <h1>
          {inputValue.trim() ? `${inputValue}'s Joke Collection` : 'All Jokes'}
        </h1>
        <p>
          {inputValue.trim()
            ? `Hey ${inputValue}! Browse through our collection of 10 hilarious jokes`
            : 'Browse through our collection of 10 hilarious jokes'}
        </p>

        <div className={`jokes-container`}>
          {jokes.map((datas, index) => {
            return (
              <div key={index} className="main-box-items">
                <span>
                  <h4>Setup:</h4> <span>{datas.setup}</span>
                </span>
                <span>
                  <h5>Punchline:</h5> <span>{datas.punchline}</span>
                </span>
                <p>Joke #{index + 1}</p>
              </div>
            );
          })}
        </div>

        <button>← Back to Home</button>
      </div>
    </>
  );
};
