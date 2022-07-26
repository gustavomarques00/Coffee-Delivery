import CoffeeIMG from "../../../../assets/coffee-delivery-logo.svg";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Package, ShoppingCart, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import { RegularText } from "../../../../components/Typography";

export function MainContent() {
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <section>
            <IntroTitle size='xl'>
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as='h3' size='l' color='subtitle'>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight='fill' />}
              text='Compra simples e segura'
              iconBG={colors["brand-yellow-dark"]}
            />

            <InfoWithIcon
              icon={<Package weight='fill' />}
              text='Embalagem mantém o café intacto'
              iconBG={colors["base-text"]}
            />

            <InfoWithIcon
              icon={<Timer weight='fill' />}
              text='Entrega rápida e rastreada'
              iconBG={colors["brand-yellow"]}
            />

            <InfoWithIcon
              icon={<Coffee weight='fill' />}
              text='O café chega fresquinho até você'
              iconBG={colors["brand-purple"]}
            />
          </BenefitsContainer>
        </div>
        <img src={CoffeeIMG} alt='Copo de Café' />
      </IntroContent>
    </IntroContainer>
  );
}
