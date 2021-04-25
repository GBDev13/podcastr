import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 6.5rem);
  margin-right: 26rem;
  overflow-y: scroll;

  > section {
    max-width: 45rem;
    padding: 3rem 2rem;
    margin: 0 auto;
    height: 100%;
  }

  .thumbnailContainer {
    position: relative;

    img {
      border-radius: 1rem;
    }

    button {
      width:3rem;
      height:3rem;
      border-radius: 0.75rem;
      border:0;
      position: absolute;
      z-index: 5;
      font-size:0;

      transition: filter 0.2s;
      
      &:first-child {
        left: 0;
        top: 50%;
        background: ${({theme}) => theme.colors.purple500};;
        transform: translate(-50%, -50%);
      }

      &:last-child {
        right: 0;
        top: 50%;
        background: ${({theme}) => theme.colors.pink};;
        transform: translate(50%, -50%);
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray100};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        &::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
    }
  }

  .description {
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${({theme}) => theme.colors.gray800};;

    p {
      margin: 1.5rem 0;
    }
  }

  @media(max-width:1450px) {
    margin-right: 21rem;
  }

  @media(max-width:1325px) {
    margin-right: 8.5rem;

    header {
      h1 {
        font-size: 1.5rem;
      }
    }
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

`;