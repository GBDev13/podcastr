import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './HeaderStyles';
import Switch from 'react-switch';

import { FaCompactDisc } from 'react-icons/fa';
import { usePlayer } from '../../contexts/PlayerContext';
import { BsMoon, BsSun } from 'react-icons/bs';
import Link from 'next/link';

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({toggleTheme}: HeaderProps) {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {locale: ptBR})

  const { isPlaying, setIsMenuVisible } = usePlayer();
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <div>
        <Link href="/">
          {title === 'dark' ? <img src="/logo-dark.svg" alt="Podcastr"/> : <img src="/logo.svg" alt="Podcastr"/>}
        </Link>


        <div className="currentDate">
          <p>O melhor pra você ouvir, sempre</p>
          <span>{currentDate}</span>
        </div>
      </div>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingRight: 2
          }}>
          <BsMoon />
        </div>}
        uncheckedIcon={
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingRight: 2
            }}>
            <BsSun />
          </div>}
        offColor={'#ccc'}
        onColor={colors.gray50}
      />

      <FaCompactDisc color={colors.white} onClick={() => setIsMenuVisible(true)} className={`icon ${isPlaying && 'active'}`}/>
    </Container>
  );
}