import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  h1{
    width: 100%;
    font-size: 2rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`

export const CoffeeItems = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 0;
  flex-wrap: wrap;
  width: 100%;
`