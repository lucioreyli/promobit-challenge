import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.p`
  color: ${colors.foreground};
  font-size: clamp(1em, 5em, 2.7vh);
`