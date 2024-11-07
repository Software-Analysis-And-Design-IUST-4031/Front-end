//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp'
import Login from './Login'
//import { MantineProvider } from '@mantine/core';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App
