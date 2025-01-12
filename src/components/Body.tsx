// import { useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export function Body() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <a href='https://www.instagram.com/carlythelander/' target="_blank">
        <FaInstagram size="30" />
      </a>
      <a href='https://www.linkedin.com/in/carly-thelander-392904a6/' target="_blank">
        <FaLinkedin size="30" />
      </a>
      <a href='https://github.com/cthelander' target="_blank">
        <FaGithub size="30" />
      </a>
    </div>
  )
}

