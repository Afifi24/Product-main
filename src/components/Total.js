import React from 'react'
import styled from 'styled-components'
export default function Total() {
  return (
    <StyledTotal>
      <div className='content'>
      <div className="dollar"><h2>$89,914</h2>
      <p>of $100,000 backed</p>
      </div>
      <div className='line'></div>
      <div className="total"><h2>5,007</h2>
      <p>total backers</p></div>
      <div className="line"></div>
      <div className="folowers"><h2>56</h2>
      <p>days left</p></div>
      </div>
      <progress id="file" value="75" max="100" > 32% </progress>
    </StyledTotal>
  )
}


// styled components

const StyledTotal = styled.div`
background-color: #fff;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
min-height:25vh ;
display: flex;
flex-direction: column;
margin-bottom: 2rem;
justify-content: space-around;
padding: 0rem 3rem;
padding-bottom: 1rem;
border-radius: 7px;
.content{
    display: flex;
align-items: center;
justify-content: space-around;
/* .dollar p{
  opacity: 0.5;
} */
}
p{
  opacity: 0.5;
  font-size: 13px;
}

.line{
    width: 1.5px;
    height: 4rem;
    background-color: hsl(0, 3.124999999999989%, 87.45098039215686%);
}
@media(max-width:586px){
  flex-direction: column;
  padding: 1rem;
  .content{
   flex-direction: column;
   justify-content: center;
   .line{
    transform: rotate(90deg);
   }
  } 
}
`