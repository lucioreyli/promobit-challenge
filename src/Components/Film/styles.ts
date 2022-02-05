import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Container = styled.a`
  display: flex;
  flex-direction: column; 
  width: 100%;
  max-width: 176px;
  margin: 2% 0;

  text-decoration: none;
  outline: none;
`

export const Poster = styled.img`
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  -webkit-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
`

export const Title = styled.h3`
  color: ${colors.title};
  max-width: 90%;
  padding: 8px 0;
  cursor: pointer;
  font-size: calc(14px + (16 - 15) * ((100vw - 500px) / (1600 - 300)));
`

export const ReleaseDate = styled.h3`
  color: ${colors.subtitle};
  text-transform: uppercase;
  font-size: calc(12px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
`