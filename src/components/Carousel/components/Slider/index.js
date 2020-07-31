import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    transform: initial;
    opacity: .5;
    margin-bottom: 9.4%;
    transition: .5s;
    
 
    &:before {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 30px;
      color: var(--primary);
      background-color: #050505;
      padding-bottom: 10vh;
      padding-top: 10vh;
      border-radius: 5%

    }
  }
  
  .slick-prev,
  .slick-next:hover{
    opacity:.8
  }
  
  @media (max-width: 800px) {
    .slick-prev,
    .slick-next{
      opacity: 0;
      display: none;
    }

    .slick-prev,
    .slick-next:hover{
      opacity: 0;
    }
  }
  
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: contain;
  }
`;


const Slider = ({ children }) =>
    (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToScroll: 5,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 