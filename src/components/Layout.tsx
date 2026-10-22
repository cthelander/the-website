import styled from 'styled-components'
import { Body } from './Body'
import { Header } from './Header'
import { Zoo } from './Zoo';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px
`
const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Header />
        <Body />
      </>
  },
  {
    path: "/Zoo",
    element:
      <>
        <Zoo />
      </>
  },
]);

export function Layout() {

  return (
    <LayoutContainer>
      <RouterProvider router={router} />
    </LayoutContainer>
  )
}

