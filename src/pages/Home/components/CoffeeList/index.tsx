import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "./CoffeeCard";
import { MainWrapper, CoffeeItems } from "./styles";

export function CoffeeList() {
  return (
    <MainWrapper>
      <TitleText size='l' color='subtitle'>
        Nossos Cafés
      </TitleText>
      <CoffeeItems>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeItems>
    </MainWrapper>
  );
}
