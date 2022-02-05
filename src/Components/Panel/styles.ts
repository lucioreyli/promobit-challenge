import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Container = styled.div`  
  display: flex;
  flex-direction: column;

  text-align: center;

  background-color: ${colors.darkPurple};
  color: ${colors.foreground};
  font-weight: 700;
  font-size: 1rem;

  padding: 85px 0;

  @media only screen and (max-width: 480px){
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 45px 16px;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  color: ${colors.foreground};
  
  margin-bottom: 38px;
  
  @media only screen and (max-width: 480px){
    line-height: 28px;
    font-size: 24px;
  }
`

export const TagsContainer = styled.div`
  display: inline-flex;
  align-self: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 75%;

  @media only screen and (max-width: 480px){
    align-self: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
`