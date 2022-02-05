import { Container, Video } from "./styles"

export const TrailerComponent: React.FC<{
  isMobile: boolean,
  urlCode: string
}> = ({isMobile, urlCode}) => {
  return(
    <Container isMobile={isMobile}>
      <Video
        src={`https://www.youtube.com/embed/${urlCode}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allowFullScreen
        />
    </Container>
  )
}