import {
  ImageWrapper,
  ListItems,
  MainContainer,
  TextWrapper,
  TitleWrapper,
} from "./styles";
import Coffee from "../../../../assets/Coffee.svg";
import { CoffeeProps } from "../CoffeeProps";

export function MainContent() {
  return (
    <MainContainer>
      <TextWrapper>
        <TitleWrapper>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleWrapper>

        <ListItems>
          <CoffeeProps />
        </ListItems>
      </TextWrapper>

      <ImageWrapper>
        <img src={Coffee} alt='Copo de Café' />
      </ImageWrapper>
    </MainContainer>
  );
}
