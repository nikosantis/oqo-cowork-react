import styled from 'styled-components'

export const SectionImg = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-image: url(${props => props.img});
`
