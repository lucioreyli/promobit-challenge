import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Text = styled.a<{ isCurrentPage: boolean }>`
  padding: 0 15px;
  color: ${({ isCurrentPage }) => isCurrentPage ? colors.darkPurple : colors.purple};
  font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;

  text-decoration: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 2%;
  }
`