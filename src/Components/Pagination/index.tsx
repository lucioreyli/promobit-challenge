import { PaginationLink } from "../PaginationLink"
import { Container } from "./styles"
import { 
  IoChevronBackSharp,
  IoChevronForwardSharp,
 } from 'react-icons/io5'
import { getPages } from "~/Services/getPages"

type PaginationProps = {
  currentPage: number
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {

  let pages: number[] = []

  const isLastPage = currentPage >= 1000
  const isFirstPage = currentPage == 1

  pages = getPages(currentPage)
  
  return (
    <Container>
      {
        !isFirstPage && 
        <>
          <PaginationLink value="start">
            Início
          </PaginationLink>
          <PaginationLink value='back' currentPage={currentPage}>
            <IoChevronBackSharp size={16}/>
          </PaginationLink>
        </>
      }
      {
        pages.map(page => <PaginationLink key={page} isCurrentPage={page === currentPage} value={page.toString()}/>)
      }
      {
        !isLastPage && 
        <>
        <PaginationLink value='next' currentPage={currentPage}>
          <IoChevronForwardSharp size={16}/>
        </PaginationLink>
        <PaginationLink value="last">
          Último
        </PaginationLink>
        </>
      }

    </Container>
  )
}