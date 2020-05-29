import React from 'react';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>  
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/rooms" exact component={Rooms}/>
<Route path="/rooms/:slug" component={SingleRoom}/>
<Route component={Error}/>
</Switch>
    </BrowserRouter>
  );
}

export default App;
