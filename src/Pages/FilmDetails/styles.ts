import styled from "styled-components";
import { colors } from "~/Styles/colors";

export const Container = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
`

export const PanelBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: '100%';
  z-index: 3;
  background-color: red;
`

export const Panel = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
  align-items: ${({isMobile}) => isMobile ? 'center' : 'flex-start'};
  justify-content: center;
  padding-bottom: ${({isMobile}) => isMobile && '30px'};
  padding-inline: ${({isMobile}) => isMobile && '20px'};
  
  background-color: ${colors.darkPurple};
  height: ${({isMobile}) => isMobile ? 'auto' : '100vh'};

  width: ${({isMobile}) => isMobile ? 'auto' : '100%'};

  align-self: center;
  justify-self: center;

  padding-top: 70px;
  margin-bottom: ${({isMobile}) => isMobile ? '25px' : '50px'};
`

export const Poster = styled.img`
  min-width: 186px;
  width: 30%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  margin-bottom: 40px;
`

export const InformationsContainer = styled.div`
  width: 50%;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    width: auto;
  padding: 0;
  }
`

export const Title = styled.h1`
  color: ${colors.foreground};
  font-size: clamp(1em, 5em, 5vh);
  margin-bottom: 8px;
`

export const Description = styled.p`    
  color: ${colors.description};
  font-size: clamp(1em, 5em, 2.7vh);
  line-height: 130%;
  letter-spacing: -0.005em;
`

export const CrewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(176px, 2fr));

  grid-gap: 32px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Body = styled.div<{isMobile: boolean}>`
  background-color: ${colors.bodyDetails};
  display: flex;
  flex-direction: column;
  ${({isMobile}) => !isMobile ? 'padding-inline: 8%' : 'padding-left: 20px'};
  padding-bottom: 30px;
`

export const Topic = styled.h1`
  color: ${colors.title};
  font-size: clamp(1em, 5em, 4vh);
  padding: 15px 0;
  margin-top: 20px;
`