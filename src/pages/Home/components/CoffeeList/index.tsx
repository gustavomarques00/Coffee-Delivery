import { CoffeeCard } from "./CoffeeCard";
import { MainWrapper, CoffeeItems } from "./styles";


export function CoffeeList(){
  return(
    <MainWrapper>
      <h1>Nossos cafés</h1>

      <CoffeeItems>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeItems>
    </MainWrapper>
  )
}