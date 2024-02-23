import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from 'styles/GlobalStyle';
import LetterContextProvider from 'context/LetterContext'; // import
import ActiveTabContext from 'context/ActiveTabContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ActiveTabContext>
    <LetterContextProvider>
      <App />
      <GlobalStyle />
    </LetterContextProvider>
  </ActiveTabContext>
);
