import React from 'react'

import styles from './Styles/TitleStyle.css'

const Title = (props) => (
  <h1 className={props.className || styles.title}>{props.children}</h1>
)

Title.propTypes = {
  // changeRoute: React.PropTypes.func
}

export default Title
