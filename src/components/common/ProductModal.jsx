import {
  chakra,
  Box,
  Text,
  Flex,
  HStack,
  Icon,
  Button,
  forwardRef,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion, isValidMotionProp } from 'framer-motion'
import React from 'react'

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <chakra.div ref={ref} {...chakraProps} />
  })
)

function ProductModal() {
  return (
    <MotionBox
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '480px', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      ml="3rem"
      w="90%"
      h="480px"
      mt="3rem"
      pos="relative"
    >
      <Flex h="100%">
        <Left
          pos="relative"
          bgColor="#000"
          w="35%"
          h="100%"
          alignItems="center"
          borderRadius=".5rem 0 0 .5rem"
        />
        <Box
          w="65%"
          h="100%"
          bg="url(https://wallpapercave.com/wp/wp5152770.jpg)"
          bgSize="cover"
          borderRadius="0 .5rem .5rem 0"
        />
      </Flex>
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        pt="3rem"
        pl="5rem"
        color="#fff"
      >
        <Text fontFamily="ReformaGroteskDemiC" fontSize="7rem" fontWeight="700">
          Name
        </Text>
        <Text maxW="500px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          qui ipsam porro quisquam sint consequuntur, odio commodi voluptates
          velit voluptas tenetur neque ratione quae vitae impedit adipisci ullam
          obcaecati nostrum?
        </Text>
        <Flex align="center" mt="1.5rem">
          <HStack>
            <Icon color="#fff" />
            <Text fontSize="1.4rem">$35</Text>
          </HStack>
          <Box color="inherit" fontWeight="800" fontSize="1.2rem" mx=".5rem">
            .
          </Box>
          <HStack>
            <Icon color="#fff" />
            <Text color="inherit" fontSize="1.4rem">
              2hrs 10mins
            </Text>
          </HStack>
        </Flex>
        <HStack spacing="3rem" mt="2rem">
          <Button bg="#f00" color="#fff" borderRadius="5px" p="2rem 4rem">
            Watch now - $35
          </Button>
        </HStack>
      </Box>
    </MotionBox>
  )
}

export { ProductModal }

const Left = styled(Flex)`
  &:before {
    content: '';
    position: absolute;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`
