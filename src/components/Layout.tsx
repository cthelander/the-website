import styled from 'styled-components'
import { Body } from './Body'
import { Header } from './Header'
import { Gallery } from './Gallery'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px
`

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

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
    path: "/Gallery",
    element:
      <>
        <Gallery />
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

