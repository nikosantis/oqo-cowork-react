import React from 'react'
import { IconBox, Image, Box, IntroCarouselGlobalStyles } from './styles'
import { useBoxIconsState } from '../../hooks/useBoxIconsState'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const API = 'https://api-cowork-oqo.now.sh/boxicons'

const IntroCarouselComponent = () => {
  const boxIcons = useBoxIconsState(API)

  return boxIcons.length === 0 ? <p>Loading</p> : (
    <>
      <IntroCarouselGlobalStyles />
      {
        boxIcons.length > 0 && (
          <OwlCarousel
            className='owl-theme SeparatorIntro__Carousel'
            items={3}
            loop
            margin={10}
            autoplay
            autoplayTimeout={10000}
            smartSpeed={700}
            nav
            responsive={
              {
                0: {
                  items: 1
                },
                768: {
                  items: 2
                },
                1000: {
                  items: 3
                }
              // eslint-disable-next-line react/jsx-indent
              }
            }
          >
            {boxIcons.map(icon =>
              <div className='item' key={icon.id}>
                <IconBox>
                  <Image src={icon.src} />
                  <Box>
                    <h3>{icon.title}</h3>
                    <p>{icon.text}</p>
                  </Box>
                </IconBox>
              </div>
            )}
          </OwlCarousel>
        )
      }
    </>
  )
}
export const IntroCarousel = React.memo(IntroCarouselComponent)
