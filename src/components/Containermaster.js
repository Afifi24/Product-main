import React from 'react'
import styled from 'styled-components'
export default function Containermaster({isopen,setisopen}) {
  function Isopen(){
    setisopen(!isopen)
    console.log(isopen)
  }
  return (
    <Mastercontainer>
      <div className="about">
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height, Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>
      <div className="Bamboo">
        <header>
        <h3>Bamboo Stand</h3>
        <p>Pledge $25 or more</p>
        </header>
        <p>You get ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special backer member list.</p>
        <footer>
           <div className="number">
           <h2>101 </h2>
            <span>left</span>
           </div>
           <button onClick={Isopen}>Select Reward</button>
        </footer>
      </div>
      {/* first */}
      <div className="Bamboo">
        <header>
        <h3>Black Edition Stand</h3>
        <p>Pledge $75 or more</p>
        </header>
        <p>You get a Black Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
        <footer>
           <div className="number">
           <h2>64 </h2>
            <span>left</span>
           </div>
           <button >Select Reward</button>
        </footer>
      </div>
      {/* second */}
      <div className="Bamboo">
        <header>
        <h3>Mahogany Special Edition</h3>
        <p>Pledge $200 or more</p>
        </header>
        <p>You get Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
        <footer>
           <div className="number">
           <h2>0 </h2>
            <span>left</span>
           </div>
           <button>out of stock</button>
        </footer>
      </div>
      
    </Mastercontainer>
  )
}


// styled components

const Mastercontainer = styled.div`
background-color: #fff;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
padding: 3rem;
border-radius: 7px;
@media(max-width:586px){
  padding: 1rem;
}
p{
    font-size: 13px;
    opacity: 0.5;
}
.about{
    margin-bottom: 4rem;
    @media(max-width:586px){
     
}
}
.Bamboo{
    border:1.5px solid hsl(0, 4.918032786885227%, 88.0392156862745%);
    padding: 1rem;
    border-radius: 7px;
margin-bottom: 1rem;
   
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            color: hsl(176, 72%, 28%);
            opacity: 0.8;
            font-weight: bold;
        }
        @media(max-width:586px){
        flex-direction: column;
        align-items: flex-start;
        p{
          margin-top:-0.5rem;
        }
        h3{
          font-size: 16px;
        }
}
    }
    footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
    .number{
        display: flex;
        align-items: center;
        span{
            opacity: 0.5;
            font-size: 12px;
            margin-left: 0.3rem;
        }
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
     flex-direction: column;
     align-items: flex-start;
}
    }
}
`
