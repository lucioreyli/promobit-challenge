import { handleRedirectPages } from "~/Services/handleRedirectPages"
import { Text } from "./styles"

type PaginationLink = {
  value: string,
  isCurrentPage?: boolean,
  currentPage?: number
}

export const PaginationLink: React.FC<PaginationLink> = ({ 
  value, 
  isCurrentPage = false, 
  children,
  currentPage = 0,
}) => {
  
  let url: string = handleRedirectPages(value, currentPage)

  
  return (
  <Text href={url} isCurrentPage={isCurrentPage}>
    { children || value }
  </Text>
  )
}