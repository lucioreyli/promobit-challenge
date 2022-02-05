import { TagInterface } from "~/Interfaces/TagInterface"
import { CloseIcon } from "../CloseIcon"
import { Container } from "./styles"

interface TagProps { 
  tag: TagInterface, 
  selected?: boolean,
  onClick: () => void,
}

export const Tag: React.FC<TagProps> = ({ tag, selected = false, ...rest}) => {
  return (
    <Container 
      selected={selected}
      {...rest}
      >
      { tag.name }
      { selected && <CloseIcon/> }
    </Container>
  )
}