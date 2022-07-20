import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 100%;

  span {
    color: ${(props) => props.theme["base-text"]};
  }
`;

const STATUS_COLOR = {
  "yellow-dark": "yellow-dark",
  yellow: "yellow",
  "base-text": "base-text",
  purple: "purple",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR;
}

export const SVGWrapper = styled.div<StatusProps>`
  background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  padding: 0.5rem;
  border-radius: 1000px;
  display: flex;

  svg {
    color: ${(props) => props.theme.white};
  }
`;
