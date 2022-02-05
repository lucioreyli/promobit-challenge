import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Container = styled.div`
  min-height: 56px;
  height: 10%;
  background-color: ${colors.purple};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 112px;

  @media only screen and (max-width: 480px) {
    justify-content: center;
    padding-left: 0;
  }
`

export const LogoContainer = styled.div`
  cursor: pointer;
`