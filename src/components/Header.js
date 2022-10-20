import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Header({isopen,setisopen}) {
  function OpenClose (){
    setisopen(!isopen)
   
  }
  return (
    <Styledheader>
      <Nav>
        <img src="./images/logo.svg" alt="hello there" />
     
      <ul className={`${isopen? 'toggle' : ""} `}>
        <li>

        <Link  to='/'>About</Link>  
          </li>
        <li>
         <Link  to='/discover'>Discover</Link> 

        </li>
        <li>
         <Link  to='/getstarted'>Get Started</Link> 

        </li>
      </ul>
      
      </Nav>
     <div className='hero' onClick={OpenClose}>
      <img  src= {`${!isopen ? './images/icon-hamburger.svg':"./images/icon-close-menu.svg" }`}   />
      </div>
    </Styledheader>
  )
}

// styled components

const Styledheader = styled.div`
min-height: 50vh;
background-image: url('./images/image-hero-desktop.jpg');
background-position: center;
background-repeat:no-repeat;
background-size:cover;
.hero{
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  
}

@media(min-width:586px){
   .hero{
    display: none;
   }
  }
`
const Nav = styled.div`
display: flex;
width: 80%;
margin: auto;
align-items: center;
justify-content: space-between;
padding: 1rem 1rem;
color: #fff;
ul{
    display: flex;
    list-style-type: none;
    align-items: center;
    li{
        margin-right: 2rem;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
      border-radius: 20px;
     

      a{
        color: #fff;
        text-decoration: none;
      }

    }
}
img{

}
@media(max-width:586px){
  ul{
    flex-direction: column;
    display: none;
    transition: all 1s ease;
    li{
      padding: 0.5rem 1rem;
      &:hover{
      background-color: hsl(176, 72%, 28%);
      transition: all 0.3s ease-in;
      border-radius: 20px;
    }
    }
  }
  .toggle{
    position: absolute;
    top: 10%;
    right: 10%;
    left: 10%;
    color: #fff;
    background-color: #000;
    height: 45vh;
    z-index: 10;
    border-radius: 10px;
    justify-content: space-around;
    display: flex;
    transition: all 1s ease;
    box-shadow: 1px 1px 10px rgba(0,0,0,0,1);

  }
  
}

`
