import React from 'react'
import Header from '../../components/Header'
import {HomeContainer, TextContainer} from "./styled"


function HomePage() {
  
  return (
  <div>
    <Header/>
    < HomeContainer>
      
      <TextContainer>
        <p>   Praesent pretium ante vitae est porta auctor. Nulla in quam dui. Mauris dapibus feugiat ultricies. Sed pretium, elit nec finibus viverra, metus tortor hendrerit massa, a posuere purus erat vitae magna. Donec dictum ac felis et faucibus. Nulla dictum finibus mollis. Sed ultrices metus ipsum, et accumsan nibh rhoncus porta.</p>

        <p>   Cras neque diam, fringilla at libero nec, ultricies eleifend ipsum. Curabitur pellentesque, dui sit amet sodales vehicula, dui turpis vulputate ligula, nec varius nisl erat vel sapien. Etiam rutrum velit nunc, ut ullamcorper lectus tincidunt ac. Aliquam imperdiet convallis ex, at posuere sapien suscipit consequat. Nulla facilisi. Nullam id lacus feugiat elit rutrum aliquam et vitae lacus. Sed scelerisque pharetra nunc, quis faucibus mauris. In accumsan elit a dui consequat, in tempus neque finibus. Pellentesque bibendum, erat et pulvinar scelerisque, enim quam accumsan dui, et varius lorem nisi ut eros. Fusce molestie, velit quis facilisis mollis, ipsum ligula eleifend dolor, et suscipit erat orci tempor justo.</p>
      </TextContainer>
    </HomeContainer>
       
  </div>
  );
}

export default HomePage;
