import { ActionButtons, FooterTab, MainWrapperItem, Price, Tags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import Expresso from "../../../../../assets/coffees/Expresso.svg";

export function CoffeeCard() {
  return (
    <MainWrapperItem>
      <img src={Expresso} alt='Café Expresso' />
      <Tags>
        <span>Tradicional</span>
        <span>Com Leite</span>
      </Tags>
      
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <FooterTab>
        <Price>
          <desc>R$ 9,90</desc>
        </Price>
        <ActionButtons>
          <input type='number' />
          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </ActionButtons>
      </FooterTab>
    </MainWrapperItem>
  );
}
