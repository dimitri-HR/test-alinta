import React, { Fragment } from 'react'
import { arrayOf, string } from 'prop-types'

const Roles = ({ roles }) => (
  <Fragment>
    {roles.map(role => (
      <li key={role}>
        {role}
      </li>
    ))}
  </Fragment>
)

Roles.propTypes = {
  roles: arrayOf(string),
}

Roles.defaultProps = {
  roles: [],
}

export default Roles
