import { shape, string, arrayOf } from 'prop-types'

export const actorTypes = shape({
  actor: shape({
    name: string.isRequired,
    roles: arrayOf(string),
  })
})
