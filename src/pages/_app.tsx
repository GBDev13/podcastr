import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Header } from '../components/Header'
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import { Container } from '../styles/AppStyles';
import GlobalStyle from '../styles/GlobalStyle';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import usePersistedState from '../utils/usePersistedState';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <PlayerContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <main>
            <Header toggleTheme={toggleTheme} />
            <Component {...pageProps} />
          </main>
          <Player />
        </Container>
      </ThemeProvider>
    </PlayerContextProvider>
  )
}

export default MyApp
