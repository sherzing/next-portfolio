import React from 'react'
import App from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'

import { Container } from 'reactstrap'

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component { ...pageProps} />
            </Container>
        )
    }
}

  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
