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

export const ButtonClose = styled.button`
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
`
