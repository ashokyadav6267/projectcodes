import React from 'react'
import NavBar from './components/NavBar';
import MainRouter from './routes/Mainrouter';

const App = () => {
  return (
    <div className='bg-black' >
      <NavBar />
      <MainRouter />
    </div>
  )
}

export default App;