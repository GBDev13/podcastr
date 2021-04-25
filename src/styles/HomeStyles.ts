import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;
  margin-right: 26rem;

  @media(max-width:1450px) {
    padding: 0 2rem;
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

  @media(max-width: 400px) {
    height: 100vh;
  }

  h2{
    margin-top: 3rem;
    margin-bottom: 1.5rem;  
  }

  .lastedEpisodes {
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;

      @media(max-width: 1050px) {
        grid-template-columns: 1fr;
      }

      li {
        background: ${({theme}) => theme.colors.card};
        border: 1px solid ${({theme}) => theme.colors.gray100};
        padding: 1.25rem;
        border-radius: 1.5rem;
        position: relative;

        display: flex;
        align-items: center;

        img, > div:first-child {
          width: 6rem;
          height: 6rem;
          border-radius: 1rem;

          @media(max-width:700px) {
            width: 4rem;
            height: 4rem;
          }
        }

        @media(max-width:550px) {
          flex-direction:column;

          > div:first-child {
            width: 100%;
          }

          img {
            width: 100%;
            height: 6rem;
          }

          a {
            margin-top: 1rem;
          }
        }

        .episodeDetails {
          flex: 1;
          margin-left: 1rem;

          a {
            display: block;
            color: ${({theme}) => theme.colors.gray800};;
            font-family: Lexend, sans-serif;
            font-weight: 600;
            text-decoration: none;
            line-height: 1.4rem;
            
            &:hover {
              text-decoration: underline;
            }
          }

          p {
            font-size: 0.875rem;
            margin-top: 0.5rem;
            max-width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;

            @media(max-width:550px) {
              white-space: normal;
            }

            &.isDark {
              color: ${({theme}) => theme.colors.blue};
            }
          }

          span {
            display: inline-block;
            margin-top: 0.5rem;
            font-size: 0.875rem;
            
            &:last-child {
              margin-left: 0.5rem;
              padding-left: 0.5rem;
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

        button {
          position: absolute;
          right: 2rem;
          bottom: 2rem;

          width: 2.5rem;
          height: 2.5rem;
          background: ${({theme}) => theme.colors.button};
          border: 1px solid ${({theme}) => theme.colors.gray100};
          border-radius: 0.675rem;
          font-size: 0;
          transition: filter .9s;
          img {
            width: 1.5rem;
            height: 1.5rem;
          }

          &:hover{
            filter: brightness(0.95);
          }
        }

      }
    }
  }

  .allEpisodes {
    padding-bottom: 2rem;

    table {
      width: 100%;

      @media(max-width:840px) {
        display: none;
      }

      th, td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid ${({theme}) => theme.colors.gray100};

        &.isDark {
          color: ${({theme}) => theme.colors.blue};
        }
      }

      th {
        color: ${({theme}) => theme.colors.gray200};
        text-transform: uppercase;
        font: 500 0.75rem Lexend, sans-serif;
        text-align: left;
      }

      td {
        font-size: 0.875rem;

        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius:0.5rem;
        }

        a {
          color: ${({theme}) => theme.colors.gray800};
          font-family: Lexend, sans-serif;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4rem;
          font-size: 1rem;

          &:hover{
            text-decoration: underline;
          }
        }

        button {
          width: 2rem;
          height: 2rem;
          background: ${({theme}) => theme.colors.button};
          border: 1px solid ${({theme}) => theme.colors.gray100};
          border-radius: 0.5rem;
          font-size: 0;
          transition: filter .9s;
          img {
            width: 1.25rem;
            height: 1.25rem;
          }

          &:hover{
            filter: brightness(0.95);
          }
        }

        @media(max-width:900px) {
          font-size: 0.7rem;
          padding: .7rem;

          a {
            font-size: .9rem;
            line-height: 1rem;
          }
        }

      }
    }
  }

  .responsiveEpisodes {
      list-style: none;
      display:none;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media(max-width: 840px) {
        display: grid;
      }

      li {
        background: ${({theme}) => theme.colors.card};
        border: 1px solid ${({theme}) => theme.colors.gray100};
        padding: 1rem;
        border-radius: 1.5rem;
        position: relative;

        display: flex;
        align-items: center;

        img {
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
        }

        @media(max-width:550px){
          padding:1.5rem .5rem;
          min-height: 10rem;
        }

        @media(max-width:380px){
          > div:first-child{
            display:none !important;
          }
        }

        .episodeDetails {
          flex: 1;
          margin-left: 1rem;

          a {
            display: block;
            color: ${({theme}) => theme.colors.gray800};;
            font-family: Lexend, sans-serif;
            font-weight: 600;
            text-decoration: none;
            line-height: 1rem;
            
            &:hover {
              text-decoration: underline;
            }
          }

          p {
            font-size: 0.8rem;
            margin-top: 0.5rem;
            max-width: 70%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media(max-width:550px) {
              white-space: normal;
            }

            &.isDark {
              color: ${({theme}) => theme.colors.blue};
            }
          }

          span {
            display: inline-block;
            margin-top: 0.5rem;
            font-size: 0.875rem;
            
            &:last-child {
              margin-left: 0.5rem;
              padding-left: 0.5rem;
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

        button {
          position: absolute;
          right: 1.5rem;
          bottom: 1rem;

          width: 2.5rem;
          height: 2.5rem;
          background: ${({theme}) => theme.colors.button};
          border: 1px solid ${({theme}) => theme.colors.gray100};
          border-radius: 0.675rem;
          font-size: 0;
          transition: filter .9s;
          img {
            width: 1.5rem;
            height: 1.5rem;
          }

          &:hover{
            filter: brightness(0.95);
          }
        }

      }
  }

`;