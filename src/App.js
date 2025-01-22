// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat';
import  Home_without_login  from './pages/Home_without_login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home_without_login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
