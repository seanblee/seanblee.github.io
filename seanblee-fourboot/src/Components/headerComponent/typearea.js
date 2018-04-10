import Typed from 'typed.js';
import React, { Component } from 'react';

class TypedReact extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
    	strings: strings,
      showCursor: true,
      cursorChar: "_",
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <div className="type-wrap">
        <span
          style={{ whiteSpace: 'pre' }}
          ref={(el) => { this.el = el; }}
        />
      </div>
    );
  }
}

export default TypedReact;
