import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from '../src/ThemeContext';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { light, dark } from '../src/Themes';

if (typeof window !== 'undefined') {
	const WebFont = require('webfontloader');
  
  WebFont.load({
    google: {
      families: [
        'Noto+Sans+JP:300,400,700',
        'Space+Mono:400,700',
        'Work+Sans:300,400,600'
      ]
    }
  });
}

class MyApp extends App {
  constructor(props){
    super(props);

    this.state = {
      theme: light,
      themeName: 'Light Theme',
      isLight: true,
      handleTheme: this.handleTheme
    }
  }
  handleTheme = () => {
    if(this.state.isLight){
      // switch to dark theme1
      console.log('dark theme switch')
      this.setState({
        theme: dark,
        themeName: 'dark theme',
        isLight: false
      })
    } else {
      this.setState({
        theme: light,
        themeName: 'dark theme',
        isLight: true
      })
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider value={this.state}>
          <ThemeProvider theme={this.state.theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;