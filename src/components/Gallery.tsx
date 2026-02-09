import styled from "styled-components";


const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export function Gallery() {

  return (
    <GalleryContainer>
      <img src='https://i.imgur.com/8nXq2bL.jpg' alt='carly and her dog' width={300} />
      <img src='https://i.imgur.com/8nXq2bL.jpg' alt='carly and her dog' width={300} />
      <img src='https://i.imgur.com/8nXq2bL.jpg' alt='carly and her dog' width={300} />
    </GalleryContainer>
  )
}

