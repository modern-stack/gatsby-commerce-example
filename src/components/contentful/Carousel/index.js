import React, { useState } from 'react'
import Image from 'gatsby-image'
import { CarouselContainer, Slide, Wrapper } from './styled'

export default ({ slides }) => {
  const [position, setPosition] = useState(0)

  return (
    <div>
      <Wrapper>
        <CarouselContainer>
          {slides.map((slide, index) => (
            <Slide key={index} visible={index === position}>
              <Image
                fluid={slide.image.fluid}
                style={{ position: 'initial', objectFit: 'cover' }}
              />
            </Slide>
          ))}
        </CarouselContainer>
      </Wrapper>
      <button
        onClick={() =>
          setPosition(position + 1 > slides.length - 1 ? 0 : position + 1)
        }
      >
        Next
      </button>
    </div>
  )
}
