import React from 'react'
import Headerr from './discover/Headerr'
import styled from 'styled-components'
import Containeer from './discover/Containeer'
import content from '../content'
export default function DiscoverProduct() {
  return (
    <Discoverp>
      <Headerr/>
      {content.map(item=>(
        <Containeer
        title={item.title}
        body={item.body}
        image ={item.image}
        key = {item.id}
        />
      ))}
    </Discoverp>
  )
}
// styled components

const Discoverp = styled.div`
   width: 80%;
   margin: auto;
   /* padding: 1rem; */
`