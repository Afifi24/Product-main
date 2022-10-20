import React from 'react'
import Headergetstarted from './Getstartedd/Headergetstarted'
import styled from 'styled-components'
import Containergetstarted from './Getstartedd/Containergetstarted'
import Footergetstarted from './Getstartedd/Footergetstarted'
export default function Getstart() {
  return (
    <Getsta>
      <Headergetstarted/>
      <Containergetstarted/>
    

    </Getsta>
  )
}

// styled compnents

const Getsta = styled.div`
width: 80%;
margin: auto;
`