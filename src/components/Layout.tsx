import styled from 'styled-components'
import { Body } from './Body'
import { Header } from './Header'
// import { Gallery } from './Gallery'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px
`

export function Layout() {

  return (
    <LayoutContainer>
      <Header />
      <Body />
      {/* <Gallery /> */}
    </LayoutContainer>
  )
}

