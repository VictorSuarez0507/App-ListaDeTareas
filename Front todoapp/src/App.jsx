//npm run dev -- --port 3000
import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AboutUs  from "./pages/AboutUs";
import Tasks from "./pages/Tasks";
import Login from './pages/Login';
import AppToDo from './pages/AppToDo';
import RegisterUser from './pages/Register';
import Layaout from './pages/Layaout';
import LayaoutUser from './pages/LayaoutUser';
import Privateroute from './pages/privateRoute';

function App() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
        </Route>     
        
        <Route path="user" element={<Privateroute element={<LayaoutUser/>}/>}>
          <Route path="apptodo" element={<AppToDo />}/>          
          <Route path="info" element={<AboutUs />}/>      
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App

/**
 * <BrowserRouter>
      <Routes>

        <Route path="user" element={<RutaPrivada element={<LayautAdmin />} />}>
          <Route index element={<TasksComponet />} />
          <Route path="taskmanager" element={<TasksComponet />} />
          <Route path="listtask" element={<TableList/>} />
          <Route path="perfil" element={<Perfils />} />
        </Route>
      </Routes>
    </BrowserRouter>
 */


