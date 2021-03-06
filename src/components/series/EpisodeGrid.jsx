import { Grid } from '@chakra-ui/react'
import React from 'react'

import { Episode } from './Episode'

function EpisodeGrid({ episodes, product, season, onToggle }) {
  return (
    <Grid
      ml=".5rem"
      mt="3.5rem"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap="1.6rem"
    >
      {episodes.map((ep) => (
        <Episode
          key={ep.id}
          onToggle={onToggle}
          episode={ep}
          product={product}
          season={season}
        />
      ))}
    </Grid>
  )
}

export { EpisodeGrid }
