import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import trailer from '../../assets/videos/trailer.mp4'
import { ProductWide } from '.'
import { Product } from './Product'

function ProductSlider ({ cardType, items }) {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (
    <Wrapper>
      <Slider {...settings}>
      {items.map((item, i) => (
       <>
         {cardType === 'LONG' ? <Product index={i} key={i} item={item} minW='17rem' mr="1.6rem" /> : <ProductWide index={i} key={i} item={item} trailer={trailer} />}
       </>
      ))}
    </Slider>
    </Wrapper>
  )
}

export { ProductSlider }

const Wrapper = styled(Box)`
  .slick-list {
    overflow: visible !important;
    /* overflow-y: visible !important; */
  }
`