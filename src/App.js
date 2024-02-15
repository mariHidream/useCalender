
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RouteTest from './components/RouteTest';

import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>app.js</h2>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;

