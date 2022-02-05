import styled from "styled-components"
import { Description, Title } from "~/Pages/FilmDetails/styles"

export const SinopseTitle = styled(Title)` 
  font-size: clamp(1.5em, 5em, 3vh);
  padding: 10px 0;
`

export const SinopseValue = styled(Description)`
  margin-bottom: 20px;
`