import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

const BaseButton = styled.button`
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 0;
  cursor: pointer;
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme.purple};

`;

export const ShoppingCart = styled(BaseButton)`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;
