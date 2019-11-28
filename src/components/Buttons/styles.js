import styled from 'styled-components'

export const ButtonBlack = styled.button`
  color: #fff;
  background-color: #000000;
  border-color: #000000;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 15px 50px;
  &:hover {
    background-color: #343a40;
    border-color: #343a40;
    color: #fff;
  }
`

export const ButtonWhite = styled.button`
  color: #ffffff;
  background-color: transparent;
  border-color: #ffffff;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 15px 50px;
  &:hover {
    background-color: #000000;
    border-color: #000000;
    color: #ffffff;
  }
`

export const ButtonGrey = styled.button`
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 15px 50px;
  &:hover {
    background-color: #343a40;
    border-color: #343a40;
    color: #fff;
  }
`
