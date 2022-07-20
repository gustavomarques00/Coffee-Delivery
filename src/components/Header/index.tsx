import { HeaderContainer, LocationButton, ShoppingCart } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export function Header(){
  return(
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <LocationButton><MapPin size={22} weight="fill" /> Porto Alegre, RS </LocationButton>
        <ShoppingCart><ShoppingCartSimple size={22} weight="fill" /> </ShoppingCart>
      </nav>
    </HeaderContainer>
  )
}