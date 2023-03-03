import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import New from './pages/New';
import Formsucces from './pages/Formsucces';
import Show from './pages/Show';
import Stu from './pages/Stu';

function App() {
  return (
  <Routes>
  <Route path='/login'element= {<Login />}/>
  <Route path='/new'element= {<New />}/>
  <Route path='/formsucces'element= {<Formsucces />}/>
  <Route path='/show'element={<Show/>}/>
  <Route path='/stu'element={<Stu/>}/>
  </Routes>
  );
}

export default App;
 