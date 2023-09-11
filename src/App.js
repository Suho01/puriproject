import logo from './logo.svg';
import './App.css';
import Login from './project/Login';
import Join from './project/Join';
import Mypage from './project/Mypage';
import { NavLink, Route, Routes } from 'react-router-dom';
import Nav from './project/Nav';

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/join' element={<Join />}></Route>
                <Route path='/mypage' element={<Mypage />}></Route>
                <Route path='/nav' element={<Nav />}></Route>
            </Routes>
            {/* <div className='w-[300px]'>
                <ul className='flex fixed top-[10px] md:right-[200px] right-[20px]'>
                    <li className='pr-10'><NavLink to="/login">login</NavLink></li>
                    <li className='pr-10'><NavLink to="/join">join</NavLink></li>
                    <li className='pr-10'><NavLink to="/mypage">mypage</NavLink></li>
                    <li><NavLink to ="/nav">nav</NavLink></li>
                </ul>
            </div> */}
        </>
    );
}

export default App;
