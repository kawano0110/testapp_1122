import './App.css';
import Home from './Home';
import Weather  from './Weather';
import Slider from './Slider';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
  } from "react-router-dom";


  function NotMatch(){
    return(
      <>
      <h2>NotMatch</h2>
      </>
    );
  }
   
  
  function Navigation() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Weather">Weather</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
   }
   

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="dashboard" element={<Dashboard />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}


export default App;
