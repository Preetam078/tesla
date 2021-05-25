import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightbtnText, backgroundImg}) {
    
    return (
        <Wrap bgImage={backgroundImg}>
          <ItemText>
            <Fade bottom >
            <h1>{title}</h1>
            <p>{description}</p>
            </Fade>
            
          </ItemText>
         
          <Buttons>
          <Fade bottom >
          <ButtonGroup>
              <LeftButtton>
                  {leftBtnText}
              </LeftButtton>
                {rightbtnText &&
                    <RightButton>
                    {rightbtnText}
                    </RightButton>
                }
              
         </ButtonGroup>
         </Fade>
         <DownArrow src="/images/down-arrow.svg"/>
         </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
  
  width:100vw;
  height:100vh;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction:column;
  justify-content: space-between; //vertical
  align-items:center;//horizontal

`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const LeftButtton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height:40px;
   width:256px;
   color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size:12px;
   cursor:pointer;
   margin:8px;

   :hover {
		color: black;
		cursor: pointer;
    background-color: white;
	}

`

const RightButton = styled(LeftButtton)`
   background:white;
   opacity:0.65;
   color:black;

   :hover {
		color: white;
		cursor: pointer;
    background-color: rgba(23, 26, 32, 0.8);
	}

`

const DownArrow  = styled.img`

  height:40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`
  

`