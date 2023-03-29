import React from 'react'
import styled from 'styled-components'

export const Loader = () => {

    return (

        <LoaderContainer></LoaderContainer>
    )
}
export const LoaderContainer = styled.div`
       font-size:48px;
       margin-top:100px;
        color: #FFF;
        width: 1em;
        height: 1em;
        box-sizing: border-box;
        background-color: currentcolor;
        position: relative;
        border-radius: 50%;
        transform: rotateX(-60deg) perspective(1000px);
  ::before, ::after{
    content: '';
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        animation: flowerFlow 1s ease-out infinite;
      }
      ::after {
        animation-delay: .4s;
      }
  
      @keyframes flowerFlow {
        0% {
          opacity: 1;
          transform: rotate(0deg);
          box-shadow: 0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor,
          0 0 0 -.5em currentcolor;
        }
        100% {
          opacity: 0;
          transform: rotate(180deg);
          box-shadow: -1em -1em 0 -.35em currentcolor,
          0 -1.5em 0 -.35em currentcolor,
          1em -1em 0 -.35em currentcolor,
          -1.5em 0 0 -.35em currentcolor,
          1.5em -0 0 -.35em currentcolor,
          -1em 1em 0 -.35em currentcolor,
          0 1.5em 0 -.35em currentcolor,
          1em 1em 0 -.35em currentcolor;
        }
    }

`