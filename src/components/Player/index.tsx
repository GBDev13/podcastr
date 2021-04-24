import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { usePlayer } from '../../contexts/PlayerContext';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { Buttons, Container, Overlay } from './PlayerStyles';
import { ThemeContext } from 'styled-components';

import { BsFillPlayFill } from 'react-icons/bs';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    toggleLoop,
    toggleShuffle,
    isShuffling,
    clearPlayerState,
    isMenuVisible,
    setIsMenuVisible
  } = usePlayer()

  useEffect(() => {
    if(!audioRef.current){
      return;
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }

  const episode = episodeList[currentEpisodeIndex]

  const { colors } = useContext(ThemeContext);

  return (
    <>
    <Overlay onClick={() => setIsMenuVisible(false)} className={isMenuVisible ? 'active' : ''}/>
      <Container onClick={() => setIsMenuVisible(true)} className={isMenuVisible ? 'active' : ''}>
        <header>
          <img src="/playing.svg" alt="Tocando agora"/>
          <strong>Tocando Agora</strong>
        </header>

        { episode ? (
          <div className="currentEpisode">
            <Image
              width={592}
              height={592}
              src={episode.thumbnail}
              objectFit="cover"
            />
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </div>
        ) : (
          <div className="emptyPlayer">
            <strong>Selecione um podcast para ouvir</strong>
          </div>
        ) }

        <footer className={!episode ? 'empty' : ''}>
          <div className="progress">
            <span>{convertDurationToTimeString(progress)}</span>
            <div className="slider">
              { episode ? (
                <Slider
                  max={episode.duration}
                  value={progress}
                  onChange={handleSeek}
                  trackStyle={{ backgroundColor: colors.blue}}
                  railStyle={{ backgroundColor: colors.pink}}
                  handleStyle={{ borderColor: colors.blue, borderWidth: 4 }}
                />
              ) : (
                <div className="emptySlider" />
              ) }
            </div>
            <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
          </div>

          {episode && (
            <audio
              src={episode.url}
              ref={audioRef}
              autoPlay
              loop={isLooping}
              onEnded={handleEpisodeEnded}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
              onLoadedMetadata={setupProgressListener}
            />
          )}

          <Buttons>
            <button
              type="button"
              disabled={!episode || episodeList.length === 1}
              onClick={toggleShuffle}
              className={isShuffling ? 'isActive' : ''}  
            >
              <img src="/shuffle.svg" alt="Embaralhar"/>
            </button>
            <button type="button" disabled={!episode || !hasPrevious} onClick={playPrevious}>
              <img src="/play-previous.svg" alt="Tocar anterior"/>
            </button>
            <button
              type="button"
              className="playButton"
              disabled={!episode}
              onClick={togglePlay}
            >
              { isPlaying
                ? <img src="/pause.svg" alt="Pausar"/>
                : <BsFillPlayFill color="#fff" size={30} title="Tocar" /> }
            </button>
            <button type="button" disabled={!episode || !hasNext} onClick={playNext}>
              <img src="/play-next.svg" alt="Tocar próxima"/>
            </button>
            <button
              type="button"
              disabled={!episode}
              onClick={toggleLoop}
              className={isLooping ? 'isActive' : ''}
            >
              <img src="/repeat.svg" alt="Repetir"/>
            </button>
          </Buttons>
        </footer>
      </Container>
    </>
  );
}