import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(176px, 2fr));

  align-self: center;
  justify-self: center;

  justify-items: center;
  align-items: flex-start;
  grid-gap: 32px;
  padding: 5% 5%;

  @media screen and (max-width: 768px) {
    grid-gap: 10px;
    padding: 7% 10px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
`