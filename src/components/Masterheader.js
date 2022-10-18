import React from 'react'
import styled from 'styled-components'
export default function Masterheader() {
  return (
    <Mastheader>
      <img src="./images/logo-mastercraft.svg" alt="" />
      <h2>Mastercraft Bamboo Monitor Riser</h2>
      <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className="btn">
        <Cutton>Back this project</Cutton>
        <Button>
        <img src="./images/icon-bookmark.svg" alt="" />
            
            Bookmark</Button>
      </div>
    </Mastheader>
  )
}

// styled components

const Mastheader = styled.div`
background-color: #fff;
padding: 2rem 3rem;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 7px;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
margin-bottom: 3rem;
img{
    position: absolute;
    top: -2rem;
    left: 45%;
}
h2{
    text-align: center;
}
p{
    text-align: center;
    opacity: 0.5;
    margin-top: -0.5rem;
    font-size: 14px;
    margin-bottom: 2rem;
}
div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    img{
        position: absolute;
        top: -2%;
        left: -4%;
        max-width: 40px;
        color: hsl(176, 72%, 28%);
    }
}
@media(max-width:586px){
div{
  flex-direction: column;

}
h2{
  font-size: 20px;
}
p{
  font-size: 11px;
}
}
`
const Button = styled.button`
background-color: hsl(0, 3.124999999999989%, 87.45098039215686%);
width: 11rem;
        height: 40px;
        border-radius: 20px;
        border: none;
        /* background-color: hsl(176, 72%, 28%); */
        color: hsl(176, 72%, 28%);
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
position: relative;
&:hover{
    background-color: hsl(176, 72%, 28%);
    color: #fff;
    transition: all 0.5s ease-in-out;
}
`
const Cutton = styled.button`

        width: 11rem;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: hsl(176, 72%, 28%);
        color: #fff;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
position: relative;

@media(max-width:586px){
margin-bottom: 2rem;
}


`