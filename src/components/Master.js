import React from 'react'
import styled from 'styled-components'
import Masterheader from './Masterheader'
import Total from './Total'
import Containermaster from './Containermaster'
export default function Master({isopen,setisopen}) {
  return (
    <Masterstyled>
      <Masterheader/>
      <Total/>
      <Containermaster
      isopen= {isopen}
      setisopen ={setisopen}
      />
    </Masterstyled>
  )
}


const Masterstyled = styled.div`
width: 50%;
margin: auto;
display: flex;
position: relative;
justify-content: center;
margin-top: -4rem;
border-radius: 5px;
flex-direction: column;
margin-bottom:3rem;
@media(max-width:922px){
  width: 80%;
}
`