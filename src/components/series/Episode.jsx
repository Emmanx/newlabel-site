import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Box, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { BsClockHistory } from 'react-icons/bs'

import playBox from '../../assets/icons/Play.svg'
import { checkIfUserOwnsItem } from '../../queries'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

function Episode({ episode, product, season, onToggle }) {
  // console.log(episode)

  const history = useHistory()
  const { authState } = useContext(AuthContext)

  const handleClick = async () => {
    if (!authState?.jwt) {
      history.push('/login')
      return
    }

    const isOwner = await checkIfUserOwnsItem(
      authState.jwt,
      authState.user.id,
      product,
      season
    )

    if (isOwner) {
      history.push('/player')
    } else {
      onToggle()
    }
  }

  return (
    <EpisodeBox
      pt="75%"
      pos="relative"
      transition="all .5s"
      onClick={handleClick}
    >
      <Box
        pos="absolute"
        w="100%"
        h="100%"
        top="0"
        left="0"
        borderRadius=".5rem"
        zIndex="-1"
        className="thumbnail"
      >
        <Box
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.9) 100%)"
          opacity="0"
          transition="all .5s"
          borderRadius=".5rem"
          zIndex="9"
          className="overlay"
        />
        <Image
          h="65%"
          w="100%"
          objectFit="cover"
          objectPosition="center"
          transition="all .5s"
          borderRadius=".5rem"
          className="scene"
          src={episode.scene.url}
          alt="episode"
        />
        <Box
          pos="absolute"
          left="0"
          bottom="0"
          transition="all .5s"
          zIndex="10"
          className="details"
        >
          <Image w="50px" opacity="0" className="play" src={playBox} alt="" />
          <Text as="h3" fontWeight="bold" mt="1rem" mb=".5rem">
            Episode {episode.episodeNumber}
          </Text>
          <Text fontSize="1.2rem">
            Three weeks, six countries - one divorce? Sometimes you need to
            spend time together
          </Text>
          <HStack align="center" mt=".5rem">
            {/* <HStack>
                <Icon color="#fff" as={BiCart} />
                <Text color="#fff" fontSize="1.2rem">
                  ${episode.buyPrice}
                </Text>
              </HStack>
              <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
                .
              </Box> */}
            <HStack>
              <Icon color="#fff" as={BsClockHistory} />
              <Text color="#fff" fontSize="1.2rem">
                {episode.runtime}
              </Text>
            </HStack>
            <Box color="#fff" fontWeight="800" fontSize="1.2rem" mx=".5rem">
              .
            </Box>
            {/* <Text color="#fff" fontSize="1.2rem">
              Available for 48hrs
            </Text> */}
          </HStack>
        </Box>
      </Box>
    </EpisodeBox>
  )
}

export { Episode }

const EpisodeBox = styled(Box)`
  @media (min-width: 768px) {
    &:hover {
      img.scene {
        transform: scale(1.05);
        height: 100%;
      }

      img.play {
        opacity: 1;
      }

      .details {
        transform: translateY(-5px);
        color: #fff;
      }

      .overlay {
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }
`
