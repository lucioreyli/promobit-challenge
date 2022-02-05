import { TagInterface } from "~/Interfaces/TagInterface"

type Props = { 
  genres: TagInterface[] | undefined
}

export const GenresListComponent: React.FC<Props> = ({ genres }) => {
  return(
  <>
    {
      !!genres && genres.map((category, index) => {
        return index + 1 == genres?.length ?
        `${category.name}` : `${category.name}, `
      })
    }
  </>
  )
}