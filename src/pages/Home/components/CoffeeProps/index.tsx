import { ShoppingCartSimple, Package, Timer, Coffee } from "phosphor-react";
import { ContainerWrapper, SVGWrapper } from "./styles";

export function CoffeeProps() {
  return (
    <>
      <ContainerWrapper>
        <SVGWrapper statusColor="yellow-dark">
          <ShoppingCartSimple size={16} weight='fill' />
        </SVGWrapper>

        <span>Compra simples e segura</span>
      </ContainerWrapper>

      <ContainerWrapper>
        <SVGWrapper statusColor="base-text">
          <Package size={16} weight='fill' />
        </SVGWrapper>

        <span>Embalagem mantém o café intacto</span>
      </ContainerWrapper>
      <ContainerWrapper>
        <SVGWrapper statusColor="yellow">
          <Timer size={16} weight='fill' />
        </SVGWrapper>

        <span>Entrega rápida e rastreada</span>
      </ContainerWrapper>
      <ContainerWrapper>
        <SVGWrapper statusColor="purple">
          <Coffee size={16} weight='fill' />
        </SVGWrapper>

        <span>O café chega fresquinho até você</span>
      </ContainerWrapper>
    </>
  );
}
