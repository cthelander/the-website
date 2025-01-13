import { ReactElement } from "react";

export function Link({ href, icon }: { href: string, icon: ReactElement }) {

  return (
    <a href={href} target="_blank">
      {icon}
    </a>
  )
}
