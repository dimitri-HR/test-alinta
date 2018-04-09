import React, { Fragment } from 'react'

import { actorTypes } from '../../types'
import Roles from '../Roles'

const Actor = ({ actor: { name, roles } }) => (
  <Fragment>
    <p>{name}</p>
    <ul>
      <Roles roles={roles} />
    </ul>
  </Fragment>
)

Actor.propTypes = {
  actor: actorTypes.isRequired,
}

export default Actor
