import React,{useState} from 'react'
import Header from './components/Header';
import Master from './components/Master';
import styled from 'styled-components';
import Thanks from './components/Thanks';
function App() {
  const [isopen, setisopen] = useState(false)
  return (
    <Aplication>
    <div >
      <Header
      isopen ={isopen}
      setisopen ={setisopen}
      />
      <Master
      isopen ={isopen}
      setisopen = {setisopen}
      />

      </div>
     <Thanks 
     isopen={isopen}
     setisopen={setisopen}
     />
    </Aplication>
  );
}

export default App;
// styeled components

const Aplication = styled.div`



`