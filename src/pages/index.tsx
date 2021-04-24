import { GetStaticProps } from "next"
import { api } from "../services/api"
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { usePlayer } from "../contexts/PlayerContext";
import { Container } from "../styles/HomeStyles";

import { BsFillPlayFill } from 'react-icons/bs';
import { useContext } from "react";
import { ThemeContext } from "styled-components";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: number;
  durationAsString: string;
  url: string;
}

type HomeProps = {
  allEpisodes: Episode[];
  latestEpisodes: Episode[];
}

export default function Home({ allEpisodes, latestEpisodes }: HomeProps) {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

  const { colors, title } = useContext(ThemeContext);

  return (
      <Container>
        <Head>
          <title>Home | Podcastr</title>
        </Head>

        <section className="lastedEpisodes">
          <h2>Últimos lançamentos</h2>

          <ul>
            {latestEpisodes.map((episode, index) => (
              <li key={episode.id}>
               <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />

                <div className="episodeDetails">
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p className={title === 'dark' ? 'isDark' : ''}>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type="button" onClick={() => playList(episodeList, index)}>
                <BsFillPlayFill color={colors.buttoninside} size={20} title="Tocar episódio" />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="allEpisodes">
          <h2>Todos episódios</h2>
          
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allEpisodes.map((episode, index) => (
                <tr key={episode.id}>
                  <td style={{width: 72}}>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>
                  <td className={title === 'dark' ? 'isDark' : ''}>{episode.members}</td>
                  <td style={{width: 100}}>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button type="button" onClick={() => playList(episodeList, index + latestEpisodes.length)}>
                    <BsFillPlayFill color={colors.buttoninside} size={17} title="Tocar episódio" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="responsiveEpisodes">
            {allEpisodes.map((episode, index) => (
              <li key={episode.id}>
               <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                  className="image"
                />

                <div className="episodeDetails">
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p className={title === 'dark' ? 'isDark' : ''}>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>

                <button type="button" onClick={() => playList(episodeList, index)}>
                <BsFillPlayFill color={colors.buttoninside} size={20} title="Tocar episódio" />
                </button>
              </li>
            ))}
          </ul>

        </section>
      </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale : ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url
    };
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      allEpisodes,
      latestEpisodes
    },
    revalidate: 60 * 60 * 8, //8 horas
  }
}
