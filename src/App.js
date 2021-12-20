import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
import Login from './components/Login.js';
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Spinner from 'react-spinkit'
// import your route components too

// function Welcome() {
//   return <h1>Hello,</h1>;
// }

function App() {
  const [user, loading] =useAuthState(auth);

  if (loading){
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
              src="https://cdn.cdnlogo.com/logos/s/40/slack-new.svg"
              alt=""
          />
          <Spinner 
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
    <BrowserRouter>
      {!user ?(
            <Login />
          ):(
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
              <Route path="/" element={<Chat />} />
          </Routes>
        </AppBody>
      </>
      )}
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

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img{
    height: 200px;
    padding: 20px;    
  }

`;
