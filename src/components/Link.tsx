import { ReactElement } from "react";
import styled from "styled-components";

const LinkContainer = styled.a`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 6px 6px 0 6px;
  &:hover {
    border-color: #646cff;
  }
`
export function Link({ href, icon }: { href: string, icon: ReactElement }) {

  return (
    <LinkContainer href={href} target="_blank">
      {icon}
    </LinkContainer>
  )
}
