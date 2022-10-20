import React from 'react'
import styled from 'styled-components'
export default function Headerr() {
  return (
    <Header>
      <div className='nav'>
      <img src="./imagess/logo.svg" alt="" />
      <button>Try It Free</button>
      </div>
      <div className='build'>
        <div className='text'>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
             <button>Get Started For Free</button>
        </div>
        <div className='image'>
<img src="./imagess/illustration-mockups.svg" alt="" />

        </div>
      </div>
    </Header>
  )
}
// styled components

const Header = styled.div`
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0rem;
margin-bottom: 4rem;
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4rem;
    button{
    width: 10rem;
    height: 40px;
    border: none;
    border-radius: 20px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #ff0099;
    color:#ff0099;
    font-weight: bold;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);

    &:hover{
        transform: scale(0.98);
        background-color: #ff0099;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }
}
@media(max-width:922px){
    flex-direction: column;
    img{
        margin-bottom:3rem;
    }
}
}
.build{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
     width: 25rem;
     
     @media(max-width:922px){
        width: 20rem;
        text-align: center;
     }
    }
    .text{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 2rem;
        h1{
      font-size: 2.3rem;
      @media(max-width:922px){
        font-size: 1.8rem;
      }
        }
 p{
    margin-bottom: 3rem;
    @media(max-width:922px){
        /* font-size:13px; */
    }
 }
        button{
    width: 14rem;
    height: 45px;
    border: none;
    border-radius: 30px;
    background-color: #ff0099;
    cursor: pointer;
    border: 1px solid #ff0099;
    color:#fff;
    font-weight: bold;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.4);
    
    &:hover{
        transform: scale(0.98);
    }
        }
        @media(max-width:922px){
            text-align: center;
            align-items: center;
            margin-bottom: 3rem;
        }
    }
    @media(max-width:922px){
    flex-direction: column;
    text-align: center;
}
}

`