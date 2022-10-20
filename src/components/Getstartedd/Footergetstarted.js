import React from 'react'
import styled from 'styled-components'
export default function Footergetstarted() {
  return (
    <Foooter>
     <div>
      <div className="left">
        <img src="./imagesdiscover/logo.svg" alt="" />
       <ul>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
       </ul>
      </div>
     </div>
     <div className="socialMedia">
      <div className="images">
        <img src="./imagesdiscover/icon-facebook.svg" alt="" />
        <img src="./imagesdiscover/icon-instagram.svg" alt="" />
        <img src="./imagesdiscover/icon-pinterest.svg" alt="" />
        <img src="./imagesdiscover/icon-twitter.svg" alt="" />
      </div>
      <p>&copy; 2022    Loopstudios. All the rights reserved.</p>
     </div>
    </Foooter>
  )
}
// styled components


const Foooter = styled.div`
min-height: 10vh;
background-color: #000;
display: flex;
justify-content: space-between;
padding: 2rem;

.left{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  img{
    width: 8rem;
    margin-bottom: 1rem;
  }
  ul{
    display: flex;
    list-style-type: none;
    @media(max-width:696px){
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li{
    margin-bottom: 1rem;
  }
}
    li{
      color: #fff;
      font-size: 12px;
      margin-right: 1.3rem;
      cursor: pointer;
      opacity: 0.5;
      &:hover{
        opacity:1;
      transition: 0.3s;

      }
    }
  }
}
.socialMedia{
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    opacity: 1;
    &:hover{
      opacity: 0.5;
      transition: 0.3s;
    }
  }
  p{
    color: #fff;
    font-size: 12px;
    opacity: 0.5;
  }
  .images{
    margin-bottom: 1rem;
  }
}
@media(max-width:696px){
  flex-direction: column;
  align-items: center;
}
`
