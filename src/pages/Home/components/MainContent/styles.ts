import styled from "styled-components";

export const MainContainer = styled.main`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  flex: 0 0 53%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    font-weight: 800;
    font-family: "Baloo 2";
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }
`;

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.25rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;
