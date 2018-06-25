import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class TextInput extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onKeyDown: PropTypes.func,
    onRef: PropTypes.func,
    className: PropTypes.string
  };

  state = {
    isInFocus: false,
    onRef: () => {},
    hasValue: false
  };

  onChange = e => {
    const value = e.target.value || '';

    this.setState({
      hasValue: !!value,
      value
    });
  };

  onFocus = () => {
    this.setState({ isInFocus: true });
  };

  onBlur = () => {
    this.setState({ isInFocus: false });
  };

  render() {
    return (
      <label
        className={cn(
          'text-input',
          { 'text-input--in-focus': this.state.isInFocus },
          this.props.className
        )}
      >
        <span className="text-input__placeholder">
          {this.props.placeholder}
        </span>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className="text-input__input"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.props.onKeyDown}
          ref={ref => {
            this.props.onRef ? this.props.onRef(ref) : (this.input = ref);
          }}
        />
      </label>
    );
  }
}

export default TextInput;