import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "./Link";
import styled from "styled-components";
import resume from "../assets/ThelanderCarlyResume2024.pdf"

const IconSize = 30
const IconColor = "#FFF"

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`

export function Body() {

  return (
    <>
      <Links>
        <Link
          href='https://www.instagram.com/carlythelander/'
          icon={<FaInstagram size={IconSize} color={IconColor} />}
        />
        <Link
          href='https://www.linkedin.com/in/carly-thelander-392904a6/'
          icon={<FaLinkedin size={IconSize} color={IconColor} />}
        />
        <Link
          href='https://github.com/cthelander'
          icon={<FaGithub size={IconSize} color={IconColor} />}
        />
      </Links>

      <a href={resume} download="CarlyThelanderResume" target='_blank'>
        <button>Download my resume</button>
      </a>
      <a href={'/'} >
        <button>Gallery</button>
      </a>
    </>
  )
}

