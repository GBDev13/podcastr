import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './HeaderStyles';

import { FaCompactDisc } from 'react-icons/fa';
import { usePlayer } from '../../contexts/PlayerContext';

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({toggleTheme}: HeaderProps) {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {locale: ptBR})

  const { isPlaying, setIsMenuVisible } = usePlayer();
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      {title === 'dark' ? <img src="/logo-dark.svg" alt="Podcastr"/> : <img src="/logo.svg" alt="Podcastr"/>}


      {/* <p>O melhor pra você ouvir, sempre</p> */}

      {/* <span>{currentDate}</span> */}

      <button onClick={toggleTheme}>tema</button>

      <FaCompactDisc onClick={() => setIsMenuVisible(true)} className={`icon ${isPlaying && 'active'}`}/>
    </Container>
  );
}