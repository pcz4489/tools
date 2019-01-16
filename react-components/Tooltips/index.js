import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  placement: PropTypes.string,
  width: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  theme: PropTypes.string,
  offset: PropTypes.string
}

const defaultProps = {
  placement: 'top',  // left/right/top/bottom
  width: 'auto',  // number
  theme: '', // black/white
  offset: ''  // left:xxpx;right...
}

class Tooltips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  componentDidMount() {
    this.target.onmouseover = () => {
      this.setState({ visible: true })
    }
    this.target.onmouseout = () => {
      this.setState({ visible: false })
    }
  }
  componentWillUnmount() {
    this.target.onmouseon = null
    this.target.onmouseout = null
  }
  render() {
    const { visible } = this.state
    const { children, placement, width, theme, offset } = this.props
    const style = { display: visible ? 'block' : 'none', width }
    if (offset) {
      Object.assign(style, { [placement]: `${offset}px` })
    }
    return (
      <div className="tool-tips" ref={(v) => { this.target = v }}>
        {children}
        <div ref={(v) => { this.tips = v }} style={style} className={`content ${placement} ${theme}`}>{this.props.content}</div>
      </div>
    )
  }
}

Tooltips.propTypes = propTypes
Tooltips.defaultProps = defaultProps

export default Tooltips
