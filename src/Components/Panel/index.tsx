import { Container, TagsContainer, Title } from "./styles"

export const Panel: React.FC = ({ children }) => {

  const isMobile: boolean = window.screen.width <= 768
  
  return(
    <Container>
      <Title>
        {'Milhões de filmes, séries e pessoas '}
        { !isMobile && <br/> }
        {'para descobrir. '}
        { isMobile && <br/> }
        {'Explore já. '}
      </Title>
      
      FILTRE POR:

      <TagsContainer>
      { children }
      </TagsContainer>
    </Container>
  )
}