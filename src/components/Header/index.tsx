import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <a href="">Timer</a>
        <a href="">History</a>
      </nav>
    </HeaderContainer>
  )
}