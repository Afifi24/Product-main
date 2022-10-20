import React from 'react'
import styled from 'styled-components'
export default function Containergetstarted() {
  return (
    <Container>
      <div className="seeall">
        <h2>Our Creations</h2>
        <button>SEE ALL</button>
      </div>
      <div className="grid">
        <div className="deep">
            <img src="./imagesdiscover/desktop/image-deep-earth.jpg" alt="" />
           <p>DEEP <br /> EARTH</p>
        </div>
        <div className="night">
        <img src="./imagesdiscover/desktop/image-night-arcade.jpg" alt="" />
        <p>NIGHT <br /> ARCADE</p>
          
        </div>
        <div className="soccer">
        <img src="./imagesdiscover/desktop/image-soccer-team.jpg" alt="" />
       <p>SOCCER <br /> TEAM VR</p>
        </div>
        <div className="thegrid">
        <img src="./imagesdiscover/desktop/image-grid.jpg" alt="" />
         <p>THE <br /> GRID</p>
        </div>
        <div className="fromabove">
        <img src="./imagesdiscover/desktop/image-from-above.jpg" alt="" />
           <p>FROM UP <br /> ABOVE VR</p>
        </div>
        <div className="pocket">
        <img src="./imagesdiscover/desktop/image-pocket-borealis.jpg" alt="" />
         <p>POCKET <br /> BOREALIS</p>
        </div>
        <div className="curiosty">
        <img src="./imagesdiscover/desktop/image-curiosity.jpg" alt="" />
        <p>THE <br /> CURIOSITY</p>
        </div>
        <div className="fisheye">
        <img src="./imagesdiscover/desktop/image-fisheye.jpg" alt="" />
  <p>MAKE IT <br /> FISHEYE</p>
        </div>
      </div>
    </Container>
  )
}
// styled components

const Container = styled.div`
.seeall{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    @media(max-width:1240px){
        margin-top: 26rem;
    }
    @media(max-width:600px){
        margin-top: 17rem;
        flex-direction: column;
        
    }
    h2{
        font-size: 2rem;
    }
    button{
        width: 9rem;
        height: 40px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        border: 1.5px solid gray;
        padding: 5px 7px;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: 5px;
        &:hover{
            background-color: gray;
            color: #fff;
            transition: all 0.5s ease-in;
        }
        @media(max-width:600px){
        width: 16rem;
        
    }
    }
}

.grid{
    display: grid;
    grid-template-areas: 
    "deep night soccer thegrid"
    "fromabove pocket curiosty fisheye"
    ;
   
   
    gap: 1rem;
    img{
        width: 15rem;
 
    }
  padding-bottom: 3rem;
  @media(max-width:1200px){
        grid-template-areas: 
    "deep night "
    "soccer thegrid"
    "fromabove pocket "
    "curiosty fisheye"
    ; 
    align-items: center;
    justify-content: center;
    img{
        width:22rem ;
    }
    }
    @media(max-width:737px){
        grid-template-areas: 
    "deep  "
    "night"
    "soccer "
    "thegrid"
    "fromabove "
    "pocket "
    "curiosty "
    "fisheye"
    ; 
    }
}
.deep{
    grid-area: deep ;
    position: relative;
    
}
.night{
    grid-area: night ;
    position: relative;
    
}
.soccer{
    grid-area: soccer ;
    position: relative;
    
}
.thegrid{
    grid-area: thegrid ;
    position: relative;

}
.fromabove{
    grid-area: fromabove ;
    position: relative;

}
.pocket{
    grid-area: pocket ;
    position: relative;

}
.curiosty{
    grid-area: curiosty ;
    position: relative;

}
.fisheye{
    grid-area: fisheye ;
    position: relative;

}
p{
        position: absolute;
        bottom: 10%;
        left: 8%;
        color: lightgray;
    }
   

`
