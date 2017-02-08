import React, {PropTypes as T} from 'react'

function TabLabel({title, isActive, onClick}) {
  return (
    <li>
      <a href="#"
        className={isActive ? 'active' : ''}
        onClick={onClick}>
        {title}
      </a>
    </li>
  )
}

function Pane({ label, children }) {
  return (<div>{children}</div>)
}

class Tabs extends React.Component {
  static propTypes = {
    index:    T.number,
    children: T.oneOfType([ T.array, T.element ]).isRequired
  }

  static defaultProps = {
    index: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      index: this.props.index
    }
  }

  render() {
    return (
    	<div className="tabs">
        {this._renderLabels()}
      	{this._renderContent()}
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
  	return this.props !== nextProps || this.state !== nextState
  }

  _handleClick(index, event) {
  	event.preventDefault()
    this.setState({ index })
  }

  _renderLabels() {
    const { children } = this.props
  	return (
    	<ul className="tabs__labels">
      	{children.map((child, i) => (
          <TabLabel
            key={i}
            title={child.props.label}
            isActive={this.state.index === i}
            onClick={e => {this._handleClick(i, e)}}
          />
        ))}
      </ul>
    )
  }

  _renderContent() {
    const { children } = this.props
  	return (
    	<div className="tabs__content">
	    	{children[this.state.index]}
      </div>
    )
  }
}

export {
  Tabs,  // Container that holds all the tabs.
  Pane   // Represents each entry that has a title and content.
}
