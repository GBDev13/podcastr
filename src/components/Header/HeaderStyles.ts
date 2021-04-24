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

  @media(max-width:1325px) {
    margin-right: 29rem;
  }

  .icon {
    width: 45px;
    height: 45px;
    cursor: pointer;
    fill: #F7F8FA;
    transition: .5s;

    &:hover{
      transform: scale(1.1) rotate(60deg);
    }

    &.active {
      animation: loopSound 2s infinite alternate;
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

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({theme}) => theme.colors.gray100};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
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
  }

  @media(max-width:550px){
    margin-right: 0;
  }
`