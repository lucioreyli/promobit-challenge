import styled from "styled-components"
import { Title } from "~/Pages/FilmDetails/styles"
import { colors } from "~/Styles/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  padding-bottom: 30px;


  scrollbar-color: ${colors.scrollbarMain} ${colors.scrollbarBackground} !important;
  scrollbar-width: 15px !important;

  //Scrollbar for Safari and Chrome;
  ::-webkit-scrollbar {
    height: 12px;
    width: 7px;
    background: ${colors.scrollbarBackground};
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarMain};
    border-radius: 100px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const PictureProfile = styled.img`
  max-width: 175px;
  border-radius: 4px;
  margin-bottom: 15px;
`

export const CasterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  max-width: 191px;
  
  margin-right: 16px;
  padding: 8px;
  border-radius: 4px;
  
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const CasterName = styled(Title)`
  font-size: clamp(1em, 5em, 2.5vh);
  color: ${colors.castersValue};
  padding: 0;
`
export const CasterCharacter = styled(Title)`
  font-size: clamp(1em, 5em, 2vh);
  font-weight: 400;
  color: ${colors.castersValue};
`