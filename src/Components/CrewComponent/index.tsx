import { CreditsInterface } from "~/Interfaces/CreditsInterface"
import { CrewContainer, CrewFunction, CrewName } from "./styles"


export const CrewComponent: React.FC<{ credits?: CreditsInterface }> = ({credits}) => {
  return(
  <>
    {
      //THE "SLICE" FUNCTION LIMITS THE ELEMENTS TO BE RENDERED,
      //TO REMOVE THE LIMIT, REMOVE THE FUNCTION -> slice(0, 6)
      /// CAUTION!!! -> THE MOVIES HAVE A LOT PRODUCERS!
      credits?.crew_array.slice(0, 5).map(crew =>
        <CrewContainer key={`${crew.credit_id}+${crew.name}`}>
          <CrewName>
            {crew.name}
          </CrewName>
          <CrewFunction>
            {crew.known_for_department}
          </CrewFunction>
        </CrewContainer>
      )
    }
  </>
  )
}