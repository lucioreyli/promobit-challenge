import { FilmInterface } from "~/Interfaces/FilmInterface"
import { Film } from "../Film"
import { Container } from "./styles"

export const RecommendationsComponent: React.FC<{ films: FilmInterface[] }> = ({ films }) => {
  return(
    <Container>
      {
        films.map(film => <Film key={film.id} film={film}/>)
      }
    </Container>
  )
}