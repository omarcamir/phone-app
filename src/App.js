// import userInfo from './components/UserInfo';
import './App.css';
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import NavBS from "./components/NavBS";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Details from './components/Shop/Details';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import About from './components/About/About';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
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
        {<Route path='/counter' element={<Counter/>}/>}
        {<Route path='/contactus' element={<Contact/>}/>}
        {<Route path='/about' element={<About/>}/>}
        {<Route path='/shop' element={<Shop/>}/>}
        {<Route path='/shop/:name/:id' element={<Details/>}/>}
        {<Route path='/login' element={<Login/>}/>}
        {<Route path='/register' element={<Register/>}/>}
        {<Route path='*' element={<NotFound/>}/>}
        
      </Routes>
    </BrowserRouter>
  )
}


export default App;
