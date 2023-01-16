import React, { Component } from 'react';
import Filler from '../Fillers/Filler/Filler';
import Iframe from 'react-iframe';
import './IframeLoader.css';

class IframeLoader extends Component {
  constructor({ spinner, src, width, height, border, frameborder, ...rest }) {
    super({ spinner, src, width, height, border, frameborder, ...rest });
    this.spinner = spinner;
    this.src = src;
    this.width = width;
    this.height = height;
    this.border = border;
    this.frameborder = frameborder;
    this.rest = rest;
    this.state = {
      loading: true
    };
  };

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <div
        style={{
          width: this.width,
          height: this.height
        }}
        className='embed'
      >
        {
          this.state.loading ?
            <div className='loading'>
              <Filler />
              {this.spinner}
              <Filler />
            </div> : null
        }
        <Iframe
          url={this.src}
          frameBorder={this.frameborder || this.border}
          onLoad={this.hideSpinner}
          width={this.width}
          height={this.height}
          {...this.rest}
        />
      </div>
    );
  };
};

export default IframeLoader;
