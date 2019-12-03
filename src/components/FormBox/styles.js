import styled, { createGlobalStyle } from 'styled-components'

export const FormBox = styled.form`
  background-color: #ffffff;
`

export const ContainerBox = styled.section`
  background-color: #ffffff;
  padding: 50px;
`

export const SuccessBox = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`

export const FormGlobalStyles = createGlobalStyle`
  .Form-h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 35px;
    color: #000000;
  }
  .Form-Input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 25px;
    width: 100%;
    border-bottom: 1px solid #ced4da;
    color: #495057;
  }
  .Form-Button {
    margin-top: 35px;
    width: 100%;
  }
`
