import React,{useState} from 'react'
import Header from './components/Header';
import Master from './components/Master';
import styled from 'styled-components';
// import Thanks from './components/Thanks';
import Discover from './pages/Discover';
import Getstarted from './pages/Getstarted';
import {Route,Routes} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import content from './content'

function App() {
  const [isopen, setisopen] = useState(false)
  const [isstarted, setisstarted] = useState(true)

  return (
    <Aplication>
    <div >
      
      <Header
      isopen ={isopen}
      setisopen ={setisopen}
      />
    <Routes>
     
       <Route exact  path='/' element ={<AboutUs/>}/>
       <Route   path='/discover' element={<Discover/>}/>
       <Route  path='/getstarted' element ={<Getstarted/>}/>
     </Routes>

      </div>
    
    </Aplication>
  );
}

export default App;
// styeled components

const Aplication = styled.div`



`