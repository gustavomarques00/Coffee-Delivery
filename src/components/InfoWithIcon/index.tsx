import { ReactNode } from "react";
import { ItemWithIconContainer, IconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBG: string;
}

export function InfoWithIcon({ icon, text, iconBG }: InfoWithIconProps) {
  return (
    <ItemWithIconContainer>
      <IconContainer iconBG={iconBG}>{icon}</IconContainer>
      {typeof text == 'string' ? <p>{text}</p> : text}
    </ItemWithIconContainer>
  );
}
