import React from 'react'
import styled from 'styled-components'
export default function Containeer({title,image,body}) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./imagess/${image}`} alt="" />
      </div>
    </Container>
  )
}


// styled components

const Container = styled.div`
display: flex;
align-items: center;
margin-bottom: 2rem;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
padding: 1rem 3rem;
min-height: 15vh;
border-radius: 10px;
p{
    opacity: 0.5;
}
img{
    width: 20rem;
    @media(max-width:434px){
        width: 15rem;
    
}

}
@media(max-width:884px){
    flex-direction: column;
}


`