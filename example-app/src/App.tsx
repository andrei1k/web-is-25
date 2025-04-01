
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Counter from './component/Counter';
import StudentLibrary from './pages/StudentLibrary';
import Login from './pages/Login';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/library' element={<StudentLibrary />}/>

        </Route>

        <Route path='/login' element={<Login />}/>

      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
