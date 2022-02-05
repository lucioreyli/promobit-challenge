import { FilmInterface } from "~/Interfaces/FilmInterface";
import { Film } from "../Film";
import { Container } from "./styles";

interface FilmsContainerProps {
  films: FilmInterface[],
  filter: number[]
}

export const FilmsContainer: React.FC<FilmsContainerProps> = ({ films, filter }) => {

  const checkIfContains = (value: number) => filter.includes(value)

  return (
    <Container>
      {
        filter.length ? films.map(film => 
          film.genre_ids.some(checkIfContains) ? 
          <Film key={film.id} film={film}/> 
          :<></>
        ) : films.map(film => <Film key={film.id} film={film}/> )
      }
    </Container>
  )
}