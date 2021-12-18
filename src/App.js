import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";

// import your route components too

// function Welcome() {
//   return <h1>Hello,</h1>;
// }

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </AppBody>
    </BrowserRouter>


      {/* Let's build slack! */}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;