// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <style>{`
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          html { 
            font-size: 62.5%; 
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          } 
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            line-height: 1;
            font-size: 14px; 
            font-size: 1.4rem;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: Space Mono, monospace;
            background-color: #FBF2EC;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          .img-responsive {
            max-width: 100%;
            height: auto;
          }

          h2 {
            font-family: 'Space Mono', sans-serif;
            font-style: normal;
            font-weight: bold;
            line-height: 53px;
            font-size: 30px;
            letter-spacing: 0.05em;
            mix-blend-mode: luminosity;
            color: #1C2426;
            margin-bottom: 2rem;
          }
          
          .meta-title {
            font-family: Work Sans, sans-serif;
            font-style: normal;
            font-weight: 300;
            line-height: 25px;
            font-size: 1.4rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #1C2426;
            mix-blend-mode: luminosity;
          }
          
          
          .bold {
            font-weight: 600 !important;
          }
        
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
