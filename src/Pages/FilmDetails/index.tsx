import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AgeComponent } from "~/Components/AgeComponent";
import { CastComponent } from "~/Components/CastComponent";
import { CrewComponent } from "~/Components/CrewComponent";
import { Divisor } from "~/Components/Divisor";
import { DurationComponent } from "~/Components/DurationComponent";
import { GenresListComponent } from "~/Components/GenresListComponent";
import { Graph } from "~/Components/Graph";
import { RecommendationsComponent } from "~/Components/RecommendationsComponent";
import { ReleaseDateComponent } from "~/Components/ReleaseDateComponent";
import { SinopseContent } from "~/Components/SinopseContent";
import { TrailerComponent } from "~/Components/TrailerComponent";
import { CreditsInterface } from "~/Interfaces/CreditsInterface";
import { FilmDetailsInterface } from "~/Interfaces/FilmDetailsInterface";
import { FilmInterface } from "~/Interfaces/FilmInterface";
import { 
  BASE_URL_IMG,
  getCertification,
  getCredits,
  getFilmDetails,
  getRecommendations,
  getTrailer,
} from "~/Services/api";
import { 
  Container,
  Description,
  InformationsContainer,
  Panel,
  Poster,
  Title,
  CrewContainer,
  Body,
  Topic,
} from "./styles";

export const FilmDetails: React.FC = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const movieId = Number(id)
  const isMobile = window.screen.width <= 768

  const [film, setFilm] = useState<FilmDetailsInterface>({})
  const [certification, setCertification] = useState<string>("")
  const [credits, setCredits] = useState<CreditsInterface>({
    crew_array: [],
    cast_array: []
  })
  const [recommendations, setRecommendations] = useState<FilmInterface[]>([])
  const [trailerCode, setTrailerCode] = useState<string>("")

  useEffect(() => {
    if(isNaN(movieId)){
      return navigate('/')
    }
    getFilmDetails(movieId)
      .then(response => setFilm(response))
    getCertification(movieId)
      .then(response => setCertification(response))
    getCredits(movieId)
      .then(response => setCredits(response))
    getTrailer(movieId)
      .then(response => setTrailerCode(response))
    getRecommendations(movieId)
      .then(response => setRecommendations(response))  
  }, [])

  return(
    <Container isMobile={isMobile}>
      <Panel isMobile={isMobile}>
        <Poster src={`${BASE_URL_IMG}${film?.poster_path}`} alt='Poster'/>
        <InformationsContainer>
          <Title>{film?.title}</Title>

          <Description>
            <AgeComponent certification={certification} />
            <Divisor/>

            <ReleaseDateComponent release_date={film?.release_date} />
            <Divisor/>

            <GenresListComponent genres={film?.genres} />
            <Divisor/>

            <DurationComponent runtime={film?.runtime} />
          </Description>
          
          <Graph value={film?.vote_average ? film.vote_average * 10 : 0}/>

          <SinopseContent overview={film?.overview}/>

          <CrewContainer>
            <CrewComponent credits={credits} />
          </CrewContainer>
        </InformationsContainer>
      </Panel>

      <Body isMobile={isMobile}>
        <Topic>
          Elenco original
        </Topic>
        <CastComponent credits={credits}/>

        <Topic>
          Trailer
        </Topic>
        <TrailerComponent isMobile={isMobile} urlCode={trailerCode}/>

        <Topic>
          Recomendações
        </Topic>
        <RecommendationsComponent films={recommendations}/>
      </Body>
    </Container>
  )
}