import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;

  background-color: ${({ selected }) => !selected ? colors.background : colors.selectedTag};
  color: ${({ selected }) => !selected ? colors.heading : colors.foreground};
  border-radius: 4px;
  
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1600 - 300)));
  font-weight: 700;

  border:none;
  padding: 8px 16px;
  margin: 6px 6px;


  cursor: pointer;
`
