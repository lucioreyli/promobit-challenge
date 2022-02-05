import { SinopseTitle, SinopseValue } from "./styles"

export const SinopseContent: React.FC<{ overview?: string | null | undefined }> = ({ overview }) => {
  return(
    <>
      <SinopseTitle>
        Sinopse
      </SinopseTitle>
      <SinopseValue>
        {
          overview || 'Sem informação.'
        }
      </SinopseValue>
    </>
  )
}