import { colors } from "~/Styles/colors"
import { Container } from "./styles"
import ReactLoading from 'react-loading'

export const Loading = () => {
  return(
    <Container>
      <ReactLoading type={'spin'} color={colors.purple} height={'10%'} />
    </Container>
  )
}