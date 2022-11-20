import React from 'react';
import './App.css';
import styled from 'styled-components';

const BgRed = styled.div`
  background-color: red;
`;

const App = () => {
  console.log(123);

  return (
    <div className="App">
      <BgRed>111</BgRed>
    </div>
  );
};

export default App;
