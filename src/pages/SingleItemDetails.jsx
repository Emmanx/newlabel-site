import { Box, Fade, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import {
  Trailer,
  Similar,
  CheckoutModal,
  LoadingScreen,
} from '../components/common'
import { ProductDetailsBanner } from '../components/common/ProductDetailsBanner'
import { getProductDetails } from '../queries'

function SingleItemDetails() {
  const { id } = useParams()
  const { isOpen, onToggle } = useDisclosure()

  const { data, isLoading } = useQuery(
    ['getProductDetails', id],
    getProductDetails
  )

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Box>
      <ProductDetailsBanner item={data} onToggle={onToggle} />
      <Trailer />
      <Similar related={data.related} />
      <Fade in={isOpen} unmountOnExit={true}>
        <CheckoutModal product={data} onToggle={onToggle} />
      </Fade>
    </Box>
  )
}

export { SingleItemDetails }
