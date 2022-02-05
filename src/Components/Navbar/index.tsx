import { useNavigate } from "react-router-dom"
import { TMBDLogo } from "../TMDBLogo"
import { Container, LogoContainer } from "./styles"

export const Navbar = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <LogoContainer onClick={() => navigate('/')}>
      <TMBDLogo/>
      </LogoContainer>
    </Container>
  )
}