import { Container } from "./styles";
import { MainContent } from "./components/MainContent";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return (
    <Container>
      <MainContent />
      <CoffeeList />
    </Container>
  );
}
