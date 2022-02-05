import { CreditsInterface } from "~/Interfaces/CreditsInterface"
import { BASE_URL_IMG } from "~/Services/api"
import {
  CasterCharacter,
  CasterContainer,
  CasterName,
  Container,
  PictureProfile,
} from "./styles"


export const CastComponent: React.FC<{ credits?: CreditsInterface }> = ({credits}) => {
  return(
  <Container>
    {
      !!credits?.cast_array.length ? 
        credits.cast_array.map(caster => {
          if(!!caster.profile_path)
            return(
              <CasterContainer key={`${caster.cast_id}+${caster.original_name}`}>
                <PictureProfile src={`${BASE_URL_IMG}${caster.profile_path}`}/>
                <CasterName>{caster.name}</CasterName>
                <CasterCharacter>{caster.character}</CasterCharacter>
              </CasterContainer>
            )
        })
        :<>Sem informação</>
    }
  </Container>
  )
}