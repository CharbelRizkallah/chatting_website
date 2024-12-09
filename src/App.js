import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import NoPhone from './components/NoPhone';
import ChatPage from './pages/ChatPage.jsx'
import Testing from './pages/Testing';
import Home from './pages/Home';

import Logo from './images/lunar_chat_logo_black.png'
import Statistics from './pages/Statistics';


function App() {

  const [user, setUser] = useState({pfp: Logo, username: 'Steve', likes: ['Minecraft','Alex'], pronouns: 'He/Him'});

  const changeUsername = (u) => {
    var newUser = user;
    newUser.username = u;
    setUser(newUser);
  }

  const changeLikes = (l) => {
    var newUser = user;
    console.log(l)
    newUser.likes = l;
    setUser(newUser);
  }

  const changePronouns = (p) => {
    var newUser = user;
    newUser.pronouns = p;
    setUser(newUser);
  }

  const changePfp = (pfp) => {
    var newUser = user;
    newUser.pfp = pfp;
    setUser(newUser);
  }



  return (
    <div className="">

      <BrowserRouter>
        <Routes>
          <Route index element={<NoPhone Element={<Home changeUsername={changeUsername} changeLikes={changeLikes} changePronouns={changePronouns} changePfp={changePfp} />}/>} />
          <Route path='/chat' element={<NoPhone Element={<ChatPage user={user} />}/>} />
          <Route path='/testing' element={<NoPhone Element={<Testing/>}/>} />
          <Route path='/stats' element={<NoPhone Element={<Statistics/>}/>} />
        </Routes>
      </BrowserRouter>

        {/* <NoPhone Element={<Testing/>}/> */}
        {/* <NoPhone Element={<ChatPage/>}/> */}

    </div>
  );
}

export default App;
