import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  width:100vw;
  height:100vh;
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background: ${({theme}) => theme.colors.overlay};
  opacity:0;
  pointer-events: none;

  transition: .5s;

  &.active {
    @media(max-width: 1325px) {
      opacity: 1;
      pointer-events: all;
    }
  }

`;

export const CloseMenu = styled.div`
  z-index: 55;
  cursor: pointer;
  display:none;
  transition: .5s;

  position: fixed;
  left: 50%;
  transform: translateX(-50%); 
  top: -6rem;

  @media(max-width: 380px) {
    display:flex;
  }


  @media(max-width: 350px) {
    left: 55%;
    transform: translateX(-60%); 
  }

  p {
    color: #fff;
  }

  svg {
    margin-right: .5rem;
  }

  &.active {
    top: 4.5rem;
  }

`;

export const Container = styled.div`
  width: 26rem;
  height: 100vh;
  padding: 3rem 4rem;
  position: fixed;
  right: 0;
  cursor:initial;
  transition: 1s;
  z-index: 50;

  @media(max-width:1450px) {
    padding: 1.5rem;
    width: 21rem;
  }

  @media(max-width:1325px) {
    right: -200px;
    filter: blur(2px);
    transition: .7s;

    &:hover {
      right:-180px;
      filter: blur(1px);
    }

    &.active{
      right:0px;
      filter: blur(0px);
    }
  }

  @media(max-width:550px) {
    right: 0px;
    transform: translateX(120vw);
    width: 70%;
    filter: blur(0);

    &.active{
    transform: translateX(0vw);
    }
  }

  @media(max-width:380px) {
    width: 100%;
    height: 100%;
  } 

  background: ${({theme}) => theme.colors.gradientbg};
  color: #fff;

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display:flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer {
    align-self: stretch;

    &.empty .progress {
      opacity: 0.5;
    }
  }

  & .currentEpisode {
    text-align: center;

    img {
      border-radius: 1.5rem;
    }

    strong {
      display: block;
      margin-top:2rem;
      font: 600 1.25rem Lexend, sans-serif;
      line-height: 1.75rem;
    }

    span {
      display: block;
      margin-top: 1rem;
      opacity: 0.6;
      line-height: 1.5rem;
    }
  }

  & .emptyPlayer {
    width:100%;
    height:20rem;
    border: 1.5px dashed ${({theme}) => theme.colors.purple300};
    border-radius: 1.5rem;
    background: ${({theme}) => theme.colors.gradient};

    padding: 4rem;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content:center;
  }

  & .progress {
    display:flex;
    align-items:center;
    gap: .5rem;
    font-size: 0.875rem;

    span {
      display:inline-block;
      width:4rem;
      text-align: center;
    }

    .slider {
      flex:1;

      .emptySlider {
        width:100%;
        height:4px;
        background:${({theme}) => theme.colors.pink};
        border-radius: 2px;
      }
    }
  }
`

export const Buttons = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border:0;
    font-size: 0;
    transition: filter 0.2s;

    &:disabled {
      cursor: default;
      opacity: .5;
    }

    &:hover:not(:disabled) {
      filter: brightness(0.7)
    }

    &.isActive {
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)
    }

    &.isActive:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)
    }

    &.playButton {
      width:4rem;
      height:4rem;
      border-radius: 1rem;
      background: ${({theme}) => theme.colors.pink};

      &:hover:not(:disabled) {
        filter: brightness(0.95)
      }
    }
    
  }
`;