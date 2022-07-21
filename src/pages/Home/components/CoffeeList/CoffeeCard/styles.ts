import styled from "styled-components";
import { TitleText } from "../../../../../components/Typography";

export const MainWrapperItem = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1.5rem;
  border-radius: 0.375rem 2.25rem;

  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
  }


  h1 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  p{
    color: ${(props) => props.theme.colors["base-label"]};
    font-size: 0.875rem;
    margin-bottom: 2rem;
    text-align: center;
    max-width: 15rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span{
    background-color: ${(props) => props.theme.colors["brand-yellow-light"]};
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
    font-size: ${(props) => props.theme.textSizes["components-tag"]};
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    text-transform: uppercase;
  }
`

export const Name = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700"
})`
  margin-bottom: 0.5rem;
`



export const FooterTab = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
`

export const Price = styled.div`
  desc {
    font-family: 'baloo 2';
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button{
    display: flex;
    background-color: ${(props) => props.theme.colors["brand-purple-dark"]};
    color: ${(props) => props.theme.colors["base-card"]};
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  input[type='number'] {

  }
`