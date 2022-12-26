
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Post from "./components/pages/Post";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
function App() {
  let isLogged= true;
  let data ={
    "st": 'user not logged in'
  }
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
           {/*<Route path="/" element= {<h1>Hello React Router</h1>}/>*/}
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/post/:category" element={<Post/>}></Route>
           <Route path="/post/:category/:id" element={<Post/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/logout" element={<Logout/>}></Route>
           {/*<Route path="/dashboard" element={<Dashboard/>}></Route>*/}
           {/*Now we will set a condition if logged in then dashboard component and if not logged in than login component*/}
           <Route path="/dashboard" element={isLogged? <Dashboard/>: <Navigate to="/login" replace state={data}/>}></Route>
           <Route path="*" element={<h1>Error 404 page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
