import styled from "styled-components";

export const Container = styled.div<{isMobile: boolean}>`
  height: 30vw;
  width: ${({isMobile}) => isMobile ? '90%' : '60%'};
`

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
`