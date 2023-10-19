// import userInfo from './components/UserInfo';
import { useState } from 'react';
import './App.css';
import {BrowserRouter , Route,Routes ,Link} from 'react-router-dom'
import NavBS from "./components/NavBS";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Details from './components/Shop/Details';
import Home from './components/Home';
const App = ()=>{
 /*  const[users,setUsers] = useState([
    {id:1,name:'Kareem',age:24},
    {id:2,name:'Adel',age:27},
    {id:4,name:'ُIsmail',age:24}
  ])

  const userList = users.map((user , index) =>(
    <userInfo
    key={index}
    id={user.id}
    name = {user.name}
    age = {user.age}
    />
  )) */


  return(
    <BrowserRouter>
      <NavBS/>
      <Routes>
        {<Route path='/' element={<Home/>}/>}
        {<Route path='/Contact' element={<Contact/>}/>}
        {<Route path='/Features' element={<Features/>}/>}
        {<Route path='/shop' element={<Shop/>}/>}
        {<Route path='/shop/:name/:id' element={<Details/>}/>}
        {<Route path='*' element={<Features/>}/>}
        
      </Routes>
    </BrowserRouter>
  )
}


export default App;
