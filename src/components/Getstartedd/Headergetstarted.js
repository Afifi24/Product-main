import React from 'react'
import styled from 'styled-components'


export default function Headergetstarted() {
  return (
    <Header>
      
        <img src="./imagesdiscover/desktop/image-interactive.jpg" alt="" />
     
      <div className='text'>
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed bussinesses through digital experiences that bond to their brand.</p>

      </div>
    </Header>
  )
}
// styled components

const Header = styled.div`
padding-top: 2rem;
margin-bottom:4rem;
position: relative;
display: flex;
/* align-items: flex-end; */
@media(max-width:1240px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text{
    background-color: #fff;
    padding: 1rem 5rem;
    min-width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 10;
    position: absolute;
    left: 55%;
    bottom: 0;
    min-height: 17rem;
    h2{
        font-size: 2.2rem;
    }
    p{
        margin-bottom: -1rem;
        font-size: 12px;
        opacity: 0.5;
    }
    @media(max-width:1240px){
     left: 0;
     bottom: -76%;
     text-align: center;
     align-items: center;
     justify-content: center;
    padding: 1rem 2rem;

     p{
        margin: 0;
     }
     h2{
        text-align: center;
     }
    }
}
@media(max-width:736px){
    padding: 1rem 2rem;
    
    img{
        width: 25rem;
        margin-bottom:5rem;
    }
    .text{
        h2{
            font-size: 1.4rem;
        }
    }

}
@media(max-width:418px){
    padding: 1rem 2rem;

    img{
        width: 20rem;
        margin-bottom:5rem;
        /* min-height: 14rem; */
        object-fit: cover;
    }
    .text{
        h2{
            font-size: 1rem;
        }
    }
}

`