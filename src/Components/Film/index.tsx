import { FilmInterface } from "~/Interfaces/FilmInterface"
import { BASE_URL_IMG } from "~/Services/api"
import { Container, ReleaseDate, Poster, Title } from "./styles"

export const Film: React.FC<{ film: FilmInterface }> = ({ film, ...rest }) => {

  const url = `${BASE_URL_IMG}${film.poster_path}`
  
  const date = new Date(film.release_date || 101010)
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }

  return (
    <Container href={`/movie/${film.id}`}>
      <Poster src={url}/>
      <Title>{film.title}</Title>
      <ReleaseDate>
        {
          !!film.release_date ? 
          new Intl.DateTimeFormat('pt-BR', dateOptions).format(date)
          : 'Sem informação'
        }
      </ReleaseDate> 

    </Container>
  )
}