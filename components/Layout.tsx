import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>Conduit</title>
      <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
      <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="//demo.productionready.io/main.css" />
    </Head>
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-compose"></i>&nbsp;New Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {children}
    <footer>
      <div className="container">
        <a href="/" className="logo-font">conduit</a>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
)

export default Layout
