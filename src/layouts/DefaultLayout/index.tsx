import { Header } from "../../components/Header";
import {Outlet } from 'react-router-dom'
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

//primeiro colocou a div . Depois substituiu a div pelo LayoutContainer  que esta dento do styles.ts