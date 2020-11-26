import React from 'react'
import { Button } from '@chakra-ui/react'

function Btn ({ children, ...otherProps }) {
  return (
    <Button color="brand.gray200" bg="transparent" fontSize="1.4rem" p="2rem 2.5rem" border="1px solid #8B90A0" outline="none" {...otherProps} _hover={{ border: '1px solid #f00', color: '#f00', background: 'transparent' }}>
      {children}
    </Button>
  )
}

export { Btn }