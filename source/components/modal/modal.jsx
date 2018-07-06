import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import TabTrapper from './tab-trapper';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    closeButtonText: PropTypes.string,
    isVisible: PropTypes.bool,
    onCloseClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    closeButtonText: 'Close'
  };

  state = {};

  componentDidMount() {
    this.modal.addEventListener('keyup', this.handleEscPress);

    this.setState({
      fitsOnScreen: this.modal.offsetHeight < window.innerHeight
    });
  }

  componentWillUnmount() {
    this.modal.removeEventListener('keyup', this.handleEscPress);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isVisible !== this.props.isVisible) {
      if (nextProps.isVisible) {
        this.onAfterShowModal();
      }
    }
  }

  onAfterShowModal = () => {
    // Wait one frame before focusing
    requestAnimationFrame(() => {
      this.modal.focus();
      this.modalWrapper.scrollTop = 0;
    });

    this.setState(
      {
        fitsOnScreen: this.modal.offsetHeight < window.innerHeight
      },
      () => {
        this.setState({ contentHeight: this.modalWrapper.scrollHeight });
      }
    );
  };

  handleEscPress = e => {
    if (e.which === 27) {
      this.props.onCloseClick();
    }
  };

  render() {
    const ariaProps = { 'aria-modal': true, role: 'dialog' };

    return (
      <div
        className={cn('modal', {
          'is-visible': this.props.isVisible,
          'fits-on-screen': this.state.fitsOnScreen
        })}
        ref={d => (this.modalWrapper = d)}
        {...ariaProps}
      >
        <div
          className="modal-background"
          style={{
            minHeight: this.state.contentHeight
          }}
          onClick={this.props.onCloseClick}
        />

        <div
          className="modal-content"
          ref={d => (this.modal = d)}
          tabIndex={-1}
        >
          <TabTrapper isActive={this.props.isVisible}>
            {this.props.children}
            <button className="modal-close" onClick={this.props.onCloseClick}>
              {this.props.closeButtonText}
            </button>
          </TabTrapper>
        </div>
      </div>
    );
  }
}

export default Modal;