import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.colors.card};
  height: 6.5rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray100};
  margin-right: 26rem;

  > div {
    display:flex;
    align-items: center;
    justify-content:center;
  }

  img {
    cursor: pointer;
  }

  @media(max-width:1325px) {
    margin-right: 29rem;
  }

  .icon {
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: .5s;
    display:none;

    &:hover{
      transform: scale(1.1) rotate(60deg);
    }

    &.active {
      animation: loopSound 2s infinite alternate;
    }

    @media(max-width:840px) {
      display:block;
    }
  }

  @keyframes loopSound {
    from {
      transform: rotate(0deg) scale(1);
      fill: ${({theme}) => theme.colors.pink};
    }
    to {
      transform: rotate(360deg) scale(1.2);
      fill: ${({theme}) => theme.colors.blue};
    }
  }

  .currentDate {
    display:flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 2rem;
      padding: 0.25rem 0 0.25rem 2rem;
      border-left: 1px solid ${({theme}) => theme.colors.gray100};
      margin-right: 2rem;
    }

    span {
      margin-left: auto;
      text-transform: capitalize;
    }

    @media(max-width:950px){
      display:none;
    }
  }

  

  @media(max-width:1450px) {
    margin-right: 21rem;
  }

  @media(max-width:1325px) {
    margin-right: 8.5rem;
  }

  @media(max-width: 1050px) {
    margin-right: 7.7rem;
  }

  @media(max-width:720px){
    margin-right: 6.7rem;
    padding: 1.5rem 2rem;
    height: 5.5rem;

    img {
      max-width:120px;
    }
  }

  @media(max-width:550px){
    margin-right: 0;
  }

  @media(max-width:400px) {
    padding: 1rem;

    img {
      max-width:100px;
    }

  }
`