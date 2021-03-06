import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// import styles from './Styles/NavBarStyle.css'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

import Actions from '../Actions/Creators'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  _toggleDrawer = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  _handleLocationChange = (location) => {
    const { changeRoute } = this.props
    changeRoute(location)
    this._toggleDrawer()
  }

  _logout = () => {
    const { changeRoute, logout } = this.props
    logout()
    changeRoute('/login')
    this._toggleDrawer()
  }

  render () {
    const { open } = this.state
    return (
      <div>
        <AppBar
          title='Coding House Interview App'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this._toggleDrawer}
        />
        <Drawer
          open={open}
          docked={false}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={() => this._handleLocationChange('/login')}>Login</MenuItem>
          <MenuItem onTouchTap={() => this._handleLocationChange('/')}>Interviews</MenuItem>
          <MenuItem onTouchTap={() => this._handleLocationChange('/settings')}>Settings</MenuItem>
          <MenuItem onTouchTap={() => this._handleLocationChange('/questions')}>Questions</MenuItem>
          <MenuItem onTouchTap={() => this._logout()}>Logout</MenuItem>
        </Drawer>
      </div>
    )
  }
}

NavBar.propTypes = {

}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    logout: () => dispatch(Actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
