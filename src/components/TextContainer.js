import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: 'We the people....'
    }
  }
  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div className="textContainer">
        <textarea
          style={{
            color: this.props.fontColor,
            fontSize: this.props.fontSize,
            fontFamily: this.props.fontFamily
          }}
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}