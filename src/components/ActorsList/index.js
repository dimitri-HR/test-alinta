import React from 'react'
import { arrayOf } from 'prop-types'

import { actorTypes } from '../../types'
import Actor from '../Actor'

const ActorList = ({ actors }) => (
  <div>
    {actors && actors.map(actor => (
        <Actor key={actor.name} actor={actor} />
    ))}
  </div>
)

ActorList.propTypes = {
  actors: arrayOf(actorTypes).isRequired,
}

export default ActorList
