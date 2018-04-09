import React from 'react'
import { string, node } from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

// Wraps components to provide consistent styling
// Pass in the 'className' prop to add extra styles
const PageContainer = ({ className, children }) => (
  <div className={cx(styles.pageContainer, className)}>
    {children}
  </div>
)

PageContainer.propTypes = {
  className: string,
  children: node,
}

PageContainer.defaultProps = {
  className: '',
  children: null,
}

export default PageContainer
