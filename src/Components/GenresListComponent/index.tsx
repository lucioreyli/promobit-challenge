import { TagInterface } from "~/Interfaces/TagInterface"

export const GenresListComponent: React.FC<{ genres: TagInterface[] | undefined}> = ({ genres }) => {
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