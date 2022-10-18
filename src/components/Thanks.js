import React from 'react'
import styled from 'styled-components'
export default function Thanks({isopen,setisopen}) {
  return (
    <Think >
        <div className={`${isopen? 'thank':''}`} >
      <img src="./images/icon-check.svg" alt="" />
      <h2>Thanks for your support!</h2>
      <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once ou campaign is completed</p>
      <button>Got it</button>
      </div>
    </Think>
  )
}
// styled components
const Think = styled.div`
display: flex;
align-items: center;
justify-content: center;

div{
min-height: 30vh;
background-color: #000;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 130%;
left: 6%;
width: 10rem;
padding: 2rem;
border-radius: 10px;
display: none;
}
.thank{
    display: flex;
}


button{
    width: 9rem;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: hsl(176, 72%, 28%);
        color: #fff;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        font-weight: bold;

        box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
        &:hover{
            transform: scale(0.98);
            font-weight: bold;
        }
       
}
@media(max-width:586px){
   div{
    margin-left: 2.8rem;
   }
}
`
