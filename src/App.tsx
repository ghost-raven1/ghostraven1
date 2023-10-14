import './App.css'
import styled from "styled-components";

const App = () => {
  return (
    <AppStyled>
        <AppTextStyled>В разработке...</AppTextStyled>
    </AppStyled>
  )
}

const AppStyled = styled.div``

const AppTextStyled = styled.div`
  font-size: 16px;
  font-weight: 700;
`

export default App
